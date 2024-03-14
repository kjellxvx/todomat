<template>
  <canvas id="myChart" style="width: 100%; max-width: 700px"></canvas>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted, toRefs, watch } from "vue";

const props = defineProps({
  sortedElements: Array,
});

const { sortedElements } = toRefs(props);

const createChart = (ctx, data) => {
  return new Chart(ctx, {
    type: "pie",
    data: {
      labels: data.map((item) => item.name),
      datasets: [
        {
          label: "%",
          data: data.map((item) => item.percentage),
          borderWidth: 1,
          backgroundColor: data.map((item) => item.color),
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      animation: {
        duration: 4000, 
      },
    },
  });
};

const updateChart = (chart, newData) => {
  chart.data.labels = newData.map((item) => item.name);
  chart.data.datasets[0].data = newData.map((item) => item.percentage);
  chart.data.datasets[0].backgroundColor = newData.map((item) => item.color);
  console.log(newData);
  chart.update();
};

onMounted(async () => {
  const ctx = document.getElementById("myChart");

  let chart = null;

  const initializeChart = () => {
    const data = sortedElements.value.map((element) => ({
      name: element.name,
      percentage: element.percentage,
      color: element.color,
    }));
    chart = createChart(ctx, data);
  };

  initializeChart();
  watch(
    () => sortedElements.value,
    (newSortedElements) => {
      updateChart(chart, newSortedElements);
    }
  );
});
</script>

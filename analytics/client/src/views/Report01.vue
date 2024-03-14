<template>
  <div>
    <div class="split left">
      <h2>
        Das möchten Andere direkt nach dem Tod
        <span class="marked-text">
          mit ihrem <br />
          Körper machen.
        </span>
      </h2>
      <div>
        <div v-for="element in sortedElements" :key="element.name">
          <div class="option-row" v-if="element.percentage">
            <p class="p-percent" v-if="element.percentage < 10">
              <span class="invisible">0</span
              ><span>{{ element.percentage }}%</span>
            </p>
            <p class="p-percent" v-else>
              <span>{{ element.percentage }}%</span>
            </p>
            <div
              :style="{ backgroundColor: element.color }"
              class="option-circle"
            ></div>
            <p class="p-label">{{ element.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="split right">
      <!-- <PieChart :sortedElements="sortedElements" /> -->
      <PieChart :sortedElements="sortedElements" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import PieChart from "@/components/PieChart.vue";

const report = ref({});

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3001/api");
    const responseData = await response.json();
    report.value = responseData.reports.report01;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const sortedElements = computed(() => {
  const elements = [
    {
      name: "Aufbahren",
      percentage: report.value["A1.1"] + report.value["A1.2"] || 0,
      color: "#363AD1",
    },
    {
      name: "Direkt transformieren",
      percentage: report.value["A1.3"] || 0,
      color: "#5254AD",
    },
    {
      name: "Organe spenden",
      percentage: report.value["A1.4"] + report.value["A1.5"] || 0,
      color: "#5F81A4",
    },
    { name: "Egal", percentage: report.value["A1.6"] || 0, color: "#6CA8BB" },
  ];

  return elements.sort((a, b) => b.percentage - a.percentage);
});
</script>

<style scoped>
h2 {
  width: 96%;
}

.marked-text {
  color: #363ad1;
}

.split {
  height: 100%;
  position: fixed;
  top: 0;
}

.left {
  left: 0;
  width: calc(100vw - 100vh);
  box-sizing: border-box;
  padding: 4em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.right {
  right: 0;
  width: 100vh;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  padding: 0.8em;
  border-style: outset;
  border: solid;
  border-width: 0;
  border-left-width: 1px;
  border-color: rgb(0, 0, 0, 0.5);
}


</style>

<template>
  <div>
    <div class="split left">
      <h2>
        Wie soll dein
        <span class="marked-text"> Körper transformiert </span> werden?
      </h2>
      <div>
        <div v-for="element in sortedElements" :key="element.name">
          <div class="option-row" v-if="element.percentage">
            <p class="p-percent">{{ element.percentage }}%</p>
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
    report.value = responseData.reports.report02;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const sortedElements = computed(() => {
  const elements = [
    {
      name: "Vergraben",
      percentage: report.value["A2.1"] || 0,
      color: "#363AD1",
    },
    {
      name: "Beschleunigt kompostieren",
      percentage: report.value["A2.2"] || 0,
      color: "#5254AD",
    },
    {
      name: "Verbrennen",
      percentage: report.value["A2.3"] || 0,
      color: "#5D73B8",
    },
    {
      name: "Gefriertrocknen",
      percentage: report.value["A2.4"] || 0,
      color: "#5F81A4",
    },
    {
      name: "Andere",
      percentage: (report.value["A2.5"] || 0) + (report.value["A2.6"] || 0),
      color: "#6CA8BB",
    },
  ];

  // Sort elements based on percentage in descending order
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

.option-row {
  display: flex;
  gap: 1em;
  align-items: center;
  flex-shrink: 0;
}

.option-circle {
  background-color: #363ad1;
  width: 3em; /* Set the width to 1em */
  height: 3em; /* Set the height to 1em */
  border-radius: 50%; /* Make it a circle */
}

.p-percent {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 0;
  opacity: 0.2;
}

.p-label {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 0;
}
</style>

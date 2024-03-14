<template>
  <div>
    <h1>Das möchten Andere direkt nach dem Tod mit ihrem Körper machen</h1>
    <div v-for="element in sortedElements" :key="element.name">
      <p v-if="element.percentage">
        {{ element.name }} {{ element.percentage }}%
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

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
    { name: "Aufbahren", percentage: report.value["A1.1"] + report.value["A1.2"] || 0 },
    {
      name: "Direkt transformieren",
      percentage: report.value["A1.3"] || 0,
    },
    {
      name: "Organe spenden",
      percentage: report.value["A1.4"] + report.value["A1.5"] || 0,
    },
    { name: "Egal", percentage: report.value["A1.6"] || 0 },
  ];

  return elements.sort((a, b) => b.percentage - a.percentage);
});
</script>

<style></style>

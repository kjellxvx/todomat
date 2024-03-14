<template>
  <div>
    <h1>
      Diese Aspekte möchten die Befragten für ihre Verabschiedung hinterlegen
    </h1>
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
    report.value = responseData.reports.report04;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const sortedElements = computed(() => {
  const elements = [
    { name: "Was gesagt wird", percentage: report.value["B1.1"] || 0 },
    {
      name: "Den Ort",
      percentage: report.value["B1.2"] || 0,
    },
    { name: "Die Gästeliste", percentage: report.value["B1.3"] || 0 },
    { name: "Die Einladung", percentage: report.value["B1.4"] || 0 },
    {
      name: "Die Playlist",
      percentage: report.value["B1.5"] || 0,
    },
  ];

  // Sort elements based on percentage in descending order
  return elements.sort((a, b) => b.percentage - a.percentage);
});
</script>

<style></style>

<template>
  <div>
    <h1>Diese Daten möchten die Befragten nach ihrem Tod löschen lassen</h1>
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
    report.value = responseData.reports.report05;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const sortedElements = computed(() => {
  const elements = [
    {
      name: "Persönliche Fotos und Videos",
      percentage: report.value["C1.1"] || 0,
    },
    {
      name: "Profile in sozialen Medien",
      percentage: report.value["C1.2"] || 0,
    },
    { name: "Persönliche Playlists", percentage: report.value["C1.3"] || 0 },
    { name: "Persönliche Dokumente", percentage: report.value["C1.4"] || 0 },
    {
      name: "Unpersönliche Dateien ",
      percentage: report.value["C1.5"] || 0,
    },
  ];

  // Sort elements based on percentage in descending order
  return elements.sort((a, b) => b.percentage - a.percentage);
});
</script>

<style></style>

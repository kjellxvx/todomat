<template>
  <div>
    <h1>Wie soll dein Körper transformiert werden?</h1>
    <div v-for="element in sortedElements" :key="element.name">
      <p v-if="element.percentage">{{ element.name }} {{ element.percentage }}%</p>
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
    report.value = responseData.reports.report02;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const sortedElements = computed(() => {
  const elements = [
    { name: "Vergraben", percentage: report.value["A2.1"] || 0 },
    {
      name: "Beschleunigt kompostieren",
      percentage: report.value["A2.2"] || 0,
    },
    { name: "Verbrennen", percentage: report.value["A2.3"] || 0 },
    { name: "Gefriertrocknen", percentage: report.value["A2.4"] || 0 },
    {
      name: "Andere",
      percentage: (report.value["A2.5"] || 0) + (report.value["A2.6"] || 0),
    },
  ];

  // Sort elements based on percentage in descending order
  return elements.sort((a, b) => b.percentage - a.percentage);
});
</script>

<style></style>

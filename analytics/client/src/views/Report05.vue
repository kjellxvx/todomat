<template>
  <div>
    <div class="split left">
      <h2>
        Diese <span class="marked-text"> Daten</span> möchten die Befragten nach
        ihrem Tod <span class="marked-text"> löschen lassen</span>
      </h2>

      <div>
        <h3>
          Welche Daten möchtest <span class="marked-text"> du </span> nach
          deinem Tod löschen lassen?
        </h3>
      </div>
    </div>
    <div class="split right">
      <div class="options-container">
        <div class="options">
          <div
            class="option"
            v-for="element in sortedElements"
            :key="element.name"
            :style="{
              backgroundColor: element.color,
              width: `${element.percentage}%`,
            }"
          >
            <p class="p-label" v-if="element.percentage">
              {{ element.percentage }} % {{ element.name }}
            </p>
          </div>
        </div>
        <div class="ghost-options">
          <div
            class="option"
            v-for="element in sortedElements"
            :key="element.name"
            :style="{
              backgroundColor: element.color,
            }"
          >
            <p class="p-label" v-if="element.percentage">
              {{ element.percentage }} % {{ element.name }}
            </p>
          </div>
        </div>
        <div class="label-options">
          <div
            class="option"
            v-for="element in sortedElements"
            :key="element.name"
          >
            <p class="p-label" v-if="element.percentage">
              {{ element.percentage }}% {{ element.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const report = ref({});

onMounted(async () => {
  try {
    const response = await fetch("https://www.api.analytics.todomat.org");
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
      color: "#363AD1",
    },
    {
      name: "Profile in sozialen Medien",
      percentage: report.value["C1.2"] || 0,
      color: "#5254AD",
    },
    {
      name: "Persönliche Playlists",
      percentage: report.value["C1.3"] || 0,
      color: "#5D73B8",
    },
    {
      name: "Persönliche Dokumente",
      percentage: report.value["C1.4"] || 0,
      color: "#5F81A4",
    },
    {
      name: "Unpersönliche Dateien ",
      percentage: report.value["C1.5"] || 0,
      color: "#6CA8BB",
    },
  ];

  // Sort elements based on percentage in descending order
  return elements.sort((a, b) => b.percentage - a.percentage);
});
</script>

<style scoped>
h2 {
  width: 100%;
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
  justify-content: space-between;
}

.right {
  right: 0;
  width: 100vh;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 4em;
  border-style: outset;
  border: solid;
  border-width: 0;
  border-left-width: 1px;
  border-color: rgb(0, 0, 0, 0.5);
  gap: 1em;
  justify-content: center;
}

.options-container {
  position: relative;
  display: flex;
  width: 80%;
}

.option {
  width: 100%;
  border-radius: 3em;
  position: relative;
  padding: 1em;
}

.options {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  z-index: 1;
  animation: growBarAnimation 1s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

.ghost-options {
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  gap: 0.5em;
  opacity: 0.5;
  text-align: center;
}

.label-options {
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  gap: 0.5em;
  opacity: 0;
  text-align: center;
  animation: fadeIn 1s forwards;
  animation-delay: 1.5s; /* Adjust delay based on your animation duration */
}

.options .p-label {
  opacity: 0;
}

.ghost-options .p-label {
  opacity: 0;
}

.p-label {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-weight: bold;
  font-size: 30px;
  line-height: 0;
  color: white;
}


</style>

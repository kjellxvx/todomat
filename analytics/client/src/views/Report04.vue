<template>
  <div>
    <div class="split left">
      <h2>
        Diese<span class="marked-text"> Aspekte</span> möchten die Befragten
        <span class="marked-text"> für ihre Verabschiedung hinterlegen</span>
      </h2>

      <div>
        <h3>
          Was möchtest <span class="marked-text"> du </span> für deine
          Verabschiedung hinterlegen?
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
    report.value = responseData.reports.report04;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const sortedElements = computed(() => {
  const elements = [
    {
      name: "Was gesagt wird",
      percentage: report.value["B1.1"] || 0,
      color: "#363AD1",
    },
    {
      name: "Den Ort",
      percentage: report.value["B1.2"] || 0,
      color: "#5254AD",
    },
    {
      name: "Die Gästeliste",
      percentage: report.value["B1.3"] || 0,
      color: "#5D73B8",
    },
    {
      name: "Die Einladung",
      percentage: report.value["B1.4"] || 0,
      color: "#5F81A4",
    },
    {
      name: "Die Playlist",
      percentage: report.value["B1.5"] || 0,
      color: "#6CA8BB",
    },
  ];
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

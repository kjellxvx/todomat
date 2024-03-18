<template>
  <div>
    <div class="diagram-axis-wrapper">
      <div class="diagram-axis">
        <p class="axis-text">Geheimnis</p>
        <p class="axis-text">Kein Geheimnis</p>
      </div>
    </div>
    <div class="split left">
      <div>
        <h1 v-if="report['F1.1']">
          {{ report["F1.1"] + report["F1.2"] + report["F1.3"] || 0 }}%
        </h1>
        <h2>
          <span class="marked-text"> haben ein Geheimnis,</span> das sie nicht
          mit in den Tod nehmen wollen
        </h2>
      </div>
      <div>
        <h3>
          Hast <span class="marked-text"> du </span> auch ein Geheimnis, das du
          nicht mit in den Tod nehmen möchtest?
        </h3>
      </div>
    </div>
    <div class="split right">
      <div class="circle-row" v-for="row in Math.ceil(100 / 10)" :key="row">
        <div
          v-for="index in 10"
          :key="index"
          :class="{
            'green-circle':
              (row - 1) * 10 + index <=
              report['F1.1'] + report['F1.2'] + report['F1.3'],
            'blue-circle':
              (row - 1) * 10 + index >
              report['F1.1'] + report['F1.2'] + report['F1.3'],
          }"
          :style="{
            '--animation-delay': calculateAnimationDelay(
              (row - 1) * 10 + index
            ),
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const report = ref({});

onMounted(async () => {
  try {
    const response = await fetch("https://www.api.analytics.todomat.org");
    const responseData = await response.json();
    report.value = responseData.reports.report07;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

const calculateAnimationDelay = (index) => {
  return index * 0.5;
};
</script>

<style scoped>
h2 {
  width: 90%;
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
  flex-direction: column;
  align-items: center;
  padding: 0.8em;
  border-style: outset;
  border: solid;
  border-width: 0;
  border-left-width: 1px;
  border-color: rgb(0, 0, 0, 0.5);
}

.circle-row {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.green-circle,
.blue-circle {
  flex: 1;
  aspect-ratio: 1;
  border-radius: 50%;
  opacity: 0;
  animation: growAnimation 1s ease-out forwards;
  animation-delay: calc(var(--animation-delay) * 0.1s);
}

.green-circle {
  background-color: #363ad1;
}

.blue-circle {
  background-color: #6cb1ab;
}
</style>

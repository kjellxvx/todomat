<template>
  <div>
    <div class="background">
      <div class="first-circle"></div>
      <div class="second-circle"></div>
      <div class="third-circle"></div>
      <div class="forth-circle"></div>
      <div class="fifth-circle"></div>
    </div>
    <div class="main">
      <h1 v-if="report">{{ report || 0 }}</h1>
      <h2>Teilnehmer*innen</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const report = ref({});

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3001/api");
    const responseData = await response.json();
    report.value = responseData.reports.counter;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped>
h1 {
  font-size: 150px;
  color: white;
  line-height: normal;
}
h2 {
  color: white;
  line-height: normal;
}

.main {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #131126;
  z-index: -9999;
  overflow: hidden;
}

.first-circle {
  position: absolute;
  top: 81%;
  left: 76%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background: radial-gradient(closest-side, #5f81a4, #4ae074 65%);
  /* filter: blur(206.63px); */
  filter: blur(20vw);
}

.second-circle {
  position: absolute;
  top: 77%;
  left: 64%;
  transform: translate(-50%, -50%) rotate(166.96deg);
  width: 48%;
  height: 48%;
  border-radius: 50%;
  background: radial-gradient(
    217.68% 217.68% at 27.97% 49.05%,
    #5ae9fd 0%,
    rgba(90, 233, 253, 0) 100%
  );
  border: 45.0761px solid #00e29a;
  /* border-radius: 383.626px; */
  border-radius: 49%;
  filter: blur(107.415px);
  filter: blur(10vw);
}

.third-circle {
  position: absolute;
  top: 54%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 71.3%;
  height: 68.9%;
  border-radius: 50%;
  background: radial-gradient(
    158.99% 50% at 50% 50%,
    #5f81a4 0%,
    rgba(99, 73, 255, 0.37) 100%
  );
  mix-blend-mode: screen;
  filter: blur(9vw);
  animation-name: rotate;
  animation-duration: 20s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-iteration-count: infinite;
}

.forth-circle {
  position: absolute;
  top: 48%;
  left: 87%;
  transform: translate(-50%, -50%) rotate(-324deg) scaleX(-1);
  width: 51.2%;
  height: 51.2%;
  border-radius: 50%;
  background-color: white;
  background: conic-gradient(
    from -180deg at 50% 50%,
    #ffe072 0deg,
    rgba(255, 216, 75, 0) 360deg
  );
  mix-blend-mode: normal;
  filter: blur(12vw);
}

.fifth-circle {
  position: absolute;
  top: 58%;
  left: 86%;
  transform: translate(-50%, -50%);
  width: 76.1%;
  height: 76.1%;
  border-radius: 50%;
  background-color: #ff8a00;
  mix-blend-mode: lighten;
  filter: blur(13vw);
  animation-name: move;
  animation-duration: 24s;
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}
</style>

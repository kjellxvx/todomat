<template>
  <div>
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
  font-size: 800px;
  line-height: 800px;
}
h2 {
  line-height: 0px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

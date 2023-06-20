<template>
  <div class="header-row">
    <p class="brand">Todomat.</p>
    <p class="slogan">Vorbereitet Sterben.</p>
  </div>
  <div class="header-row">
    <div
      class="progress-counter"
      v-for="(value, index) in progress"
      :key="index"
      :class="{ black: index < totalProgress, grey: index >= totalProgress }"
    ></div>
  </div>
</template>

<script setup>
const progress = useProgress();
const totalProgress = progress.value.reduce((sum, value) => sum + value, 0);
</script>

<style scoped>
.header-row {
  display: flex;
  margin-bottom: 1em;
  align-items: center;
}
</style>
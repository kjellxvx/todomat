<template>
  <div class="header">
    <div class="header-row">
      <p class="brand">
        <img src="../assets/svg/logo.svg" alt="Todomat Logo" />
      </p>
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
  </div>
</template>

<script setup>
const progress = useProgress();
console.log(progress.value);
const totalProgress = progress.value.reduce((sum, value) => sum + value, 0);
console.log(totalProgress);
</script>

<style scoped>
.header-row {
  display: flex;
  margin-bottom: 0.7em;
  align-items: center;
}

.header {
  margin-bottom: 1em;
}

@media only screen and (max-width: 1020px) {
  .header {
    margin-bottom: 1em;
  }
}
</style>

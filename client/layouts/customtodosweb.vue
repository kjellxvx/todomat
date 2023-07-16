<template>
  <slot />
</template>

<script setup></script>

<style>
html {
  height: 100vh;
  width: 100%;
}

.page-container {
  height: 100vh;
  max-height: 100%;
  width: 100%;
  overflow: scroll;
}

@media only screen and (max-width: 1024px) {
  .page-container {
    overflow: normal;
  }
}
</style>

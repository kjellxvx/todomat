<template>
  <slot />
</template>

<script setup></script>

<style>
html {
  height: 100svh;
  width: 100%;
}

.page-container {
  height: 100svh;
  max-height: 100%;
  width: 100%;
  overflow: scroll;
}

@media only screen and (max-width: 1020px) {
  .page-container {
    overflow: normal;
  }
}
</style>

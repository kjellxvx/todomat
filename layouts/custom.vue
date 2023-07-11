<template>
    <slot />
</template>

<script setup></script>

<style scoped >
html {
  width: 1200px;
  height: 1800px;
}

.page-container {
  height: 1800px;
  width: calc(100% - 6em); /* Adjust the value as needed */
}
</style>

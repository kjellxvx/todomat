<template>
  <div class="slide-container">
    <div class="slide">
      <div class="textbox">
        <h1>TODMOMAT</h1>
        <p>vorbereitet sterben</p>
      </div>
    </div>
    <button @click="start" type="button">START</button>
  </div>
</template>

<script setup>

const start = () => {
  navigateTo("/hello");
};
</script>

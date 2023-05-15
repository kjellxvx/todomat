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
const route = useRoute();
const local = useLocal();

const start = () => {
  navigateTo("/hello");
};

onMounted(() => {
  if (route.query.local == "true") {
    local.value = true;
  } else {
    local.value = false;
  }
});
</script>

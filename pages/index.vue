<template>
  <div class="slide">
    <div class="textbox">
      <p class="h2-index">Vorbereitet sterben.</p>
      <p class="h1-index">
        WILLKOMMEN <br />
        BEIM TODOMAT
      </p>
    </div>
    <button @click="start" class="button">Mehr erfahren</button>
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

<style scoped>
.h1-index {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-size: 100px;
  text-align: center;
  margin: 0px;
  margin: 20px 0 40px 0;
}

.h2-index {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 48.19px;
  text-align: center;
  margin: 0px;
}

.slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

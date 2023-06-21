<template>
  <div class="background">
    <div class="first-circle"></div>
    <div class="second-circle"></div>
    <div class="third-circle"></div>
    <div class="forth-circle"></div>
    <div class="fifth-circle"></div>
  </div>
  <div class="slide">
    <p class="h2-index">Vorbereitet sterben.</p>
    <p class="h1-index">
      WILLKOMMEN <br />
      BEIM TODOMAT
    </p>
    <button @click="start" class="button">Start</button>
  </div>
</template>

<script setup>
const route = useRoute();
const local = useLocal();
const start = () => {
  navigateTo("/start");
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
  /* font-size: 100px; */
  font-size: 10vw;
  text-align: center;
  /* margin: 30px 0 40px 0; */
  margin: 0 0 0.4em 0;
  color: white;
  white-space: nowrap;
}

.h2-index {
  font-family: "IBMPlexSans-Regular", sans-serif;
  /* font-size: 48.19px; */
  font-size: 5vw;
  text-align: center;
  margin: 0;
  color: white;
  padding-bottom: 0.3em;
}

.button {
  font-size: 2vw;
  background-color: white;
  color: black;
  padding: 0.2em 3.3em 0.2em 3.3em;
}

.slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1024px) {
  .button {
    font-size: 4vw;
    background-color: white;
    color: black;
    padding: 0.2em 3.3em 0.2em 3.3em;
  }
}
</style>

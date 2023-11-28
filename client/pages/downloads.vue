<template>
  <NuxtLayout name="web">
    <div class="slide">
      <HeaderCompWeb />
      <div class="textbox">
        <h1>Downloadmaterialien</h1>
        <p>
          Hier finden sich Sticker zum Ausdrucken, um spätere
          Hinterlassenschaften im eigenen Haushalt schon zu Lebzeiten zu
          kennzeichnen. Am besten auf selbstklebendem Papier drucken.
        </p>
      </div>
    </div>

    <div class="button-container">
      <button @click="navigate('')" class="button-white">Zurück</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
import HeaderCompWeb from "../components/HeaderCompWeb";

const navigate = (path) => {
  navigateTo(`/${path}`);
};
onMounted(() => {});
</script>

<style scoped>
.textbox {
  margin-bottom: 25px;
}

.button-container {
  margin-bottom: 50px;
}

@media only screen and (max-width: 1020px) {
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: normal;
  }
  .button {
    margin-right: 0px;
  }
  .button-white {
    margin-right: 0px;
  }
}
</style>

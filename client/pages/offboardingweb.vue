<template>
  <div class="slide">
    <HeaderComp />
    <CloseButton />
    <div class="textbox">
      <div></div>
      <h1>Herzlichen Glückwunsch.</h1>
      <p>
        Du hast dich heute mit deinem Tod auseinandergesetzt. Nun kannst du die offenen
        To-dos anschauen und erledigen, wenn du Raum und Gelegenheit hast.
      </p>
    </div>
    <div class="button-container">
      <button @click="navigate('todosweb')" class="button">
        To-dos jetzt anschauen
      </button>
    </div>
  </div>
</template>

<script setup>
import HeaderComp from "../components/HeaderComp";
import CloseButton from "../components/CloseButton";

const navigate = (path) => {
  navigateTo(`/${path}`);
};
</script>

<style scoped></style>
-

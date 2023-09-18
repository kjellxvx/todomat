<template>
  <div class="slide">
    <HeaderComp />
    <CloseButton />
    <div class="textbox">
      <div></div>
      <h1>Gratulation!</h1>
      <p>
        Gratulation! Du hast dich heute mit deinem Tod auseinandergesetzt. Nun kannst Du die offenen
        To-dos anschauen und erledigen, wenn Du Raum und Gelegenheit hast.
      </p>
    </div>
    <div class="button-container">
      <button @click="navigate('todosweb')" class="button">
        ToDos jetzt anschauen
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

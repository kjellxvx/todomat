<template>
  <div class="slide">
    <HeaderComp />
    <div class="textbox">
      <div></div>
      <h1>Gratulation!</h1>
      <p>
        Du hast deinen Abschied sehr gut vorbereitet. Nun kannst Du die offenen
        To-do‘s anschauen und erledigen, wenn Du Raum und Gelegenheit hast.
      </p>
    </div>
    <div class="button-container">
      <button @click="Todos" class="button">ToDos jetzt anschauen</button>
    </div>
  </div>
</template>

<script setup>
function Todos() {
  navigateTo("/todosweb");
}
</script>

<style scoped>
</style>
-

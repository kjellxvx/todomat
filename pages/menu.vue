<template>
  <div class="slide">
    <h1>Womit möchtest Du starten?</h1>
    <div class="menuContainer">
      <div class="buttonContainer">
        <button @click="A1" type="button">Dein Körper</button>
      </div>
      <div class="buttonContainer">
        <button @click="B1" type="button">Deine Übergabe</button>
      </div>
      <div class="buttonContainer">
        <button @click="C1" type="button">Deine Daten</button>
      </div>
      <div class="buttonContainer">
        <button @click="D1" type="button">Deine Dinge</button>
      </div>
      <div class="buttonContainer">
        <button @click="E1" type="button">Deine Spuren</button>
      </div>
      <div class="buttonContainer">
        <button @click="F1" type="button">Deine Geheimnisse</button>
      </div>
      <div class="buttonContainer">
        <button @click="Submit" type="button">Beenden</button>
      </div>
      <div class="buttonContainer">
        <button @click="Restart" type="button">Neu Starten</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const index = useIndex();
const order = useOrder();
function A1() {
  index.value = order.value.indexOf("A1");
  navigateTo(`/${"A1"}`);
}
function B1() {
  index.value = order.value.indexOf("B1");
  navigateTo(`/${"B1"}`);
}
function C1() {
  index.value = order.value.indexOf("C1");
  navigateTo(`/${"C1"}`);
}
function D1() {
  index.value = order.value.indexOf("D1");
  navigateTo(`/${"D1"}`);
}
function E1() {
  index.value = order.value.indexOf("E1");
  navigateTo(`/${"E1"}`);
}
function F1() {
  index.value = order.value.indexOf("F1");
  navigateTo(`/${"F1"}`);
}
function Submit() {
  navigateTo(`/${"submit"}`);
}
</script>

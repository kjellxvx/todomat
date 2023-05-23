<template>
  <div class="slide">
    <div class="header-row">
      <p class="brand">Todomat.</p>
      <p class="slogan">Dein Digitaler Hinterlassenschaftskonfigurator</p>
    </div>
    <div class="header-row">
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
    </div>

    <h1>Womit möchtest Du starten?</h1>
    <div class="menuContainer">
      <div class="menuItem">
        <p class="menu-h1">Dein Körper</p>
        <p class="menu-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </p>
        <button
          :style="{ backgroundColor: buttonColor('A1') }"
          @click="A1"
          class="menu-button"
        >
          Jetzt konfiguieren <i class="fa fa-long-arrow-right"></i>
        </button>
      </div>
      <div class="menuItem">
        <p class="menu-h1">Deine Übergabe</p>
        <p class="menu-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </p>
        <button
          :style="{ backgroundColor: buttonColor('B1') }"
          @click="B1"
          class="menu-button"
        >
          Jetzt konfiguieren <i class="fa fa-long-arrow-right"></i>
        </button>
      </div>
      <div class="menuItem">
        <p class="menu-h1">Deine Daten</p>
        <p class="menu-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </p>
        <button
          :style="{ backgroundColor: buttonColor('C1') }"
          @click="C1"
          class="menu-button"
        >
          Jetzt konfiguieren <i class="fa fa-long-arrow-right"></i>
        </button>
      </div>
      <div class="menuItem">
        <p class="menu-h1">Deine Dinge</p>
        <p class="menu-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </p>
        <button
          :style="{ backgroundColor: buttonColor('D1') }"
          @click="D1"
          class="menu-button"
        >
          Jetzt konfiguieren <i class="fa fa-long-arrow-right"></i>
        </button>
      </div>
      <div class="menuItem">
        <p class="menu-h1">Deine Spuren</p>
        <p class="menu-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </p>
        <button
          :style="{ backgroundColor: buttonColor('E1') }"
          @click="E1"
          class="menu-button"
        >
          Jetzt konfiguieren <i class="fa fa-long-arrow-right"></i>
        </button>
      </div>
      <div class="menuItem">
        <p class="menu-h1">Deine Geheimnisse</p>
        <p class="menu-p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </p>
        <button
          :style="{ backgroundColor: buttonColor('F1') }"
          @click="F1"
          class="menu-button"
        >
          Deine Geheimnisse <i class="fa fa-long-arrow-right"></i>
        </button>
      </div>
    </div>

    <div class="button-container">
      <button @click="Submit" class="button">Bearbeitung abschließen</button>
      <button @click="Restart" class="button-white">Neu Beginnen</button>
    </div>
  </div>
</template>

<script setup>
const index = useIndex();
const order = useOrder();
const todos = useTodos();
const data = useData();

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
  navigateTo("/submit");
}
function Restart() {
  index.value = 0;
  data.value = {};
  todos.value = {};
  navigateTo("/");
}

const buttonColor = computed(() => {
  return (buttonId) => {
    if (data.value[buttonId]) {
      return "#FF8A00";
    } else {
      return "white";
    }
  };
});
</script>

<style scoped>
.menuContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 33px;
}

.menuItem {
  border-style: solid;
  padding: 30px 20px 20px 20px;
  border-radius: 10px;
}

.menu-h1 {
  font-size: 22px;
  padding-bottom: 10px;
}

.menu-p {
  font-size: 15px;
  padding-bottom: 30px;
}

.menu-button {
  height: 28px;
  background-color: white;
  border-style: solid;
  color: black;
  border-width: 1px;
  border-radius: 21.1px;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 13px;
  padding: 0 15px 0 38px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.menu-button i {
  margin: 2px 0px 0 30px;
}

.button-container {
  display: flex;
  flex-direction: row;
  margin: 28px 0 28px 0;
}

.slide {
  height: 100%;
}
</style>

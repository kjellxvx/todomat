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
    <div class="textbox">
      <div></div>
      <h1>
        Guten Tag. <br />
        Wir werden alle sterben.
      </h1>
      <p>
        Es ist darum hilfreich, sich jetzt darüber Gedanken zu machen und
        wichtige Informationen zu diesem Ereignis für Dich und die Lebenden zu
        hinterlegen. Llorem Ipsum Llorem Ipsum Llorem Ipsum Llorem Ipsum. Llorem
        Ipsum Llorem Ipsum Llorem Ipsum Llorem Ipsum.
      </p>
      <p class="p-bold">
        Es gibt auch einige ToDos zu erledigen. <br />
        Der Todomat hilft Dir dabei!
      </p>
    </div>
    <div class="button-container">
      <button @click="Restart" class="button">Neu Starten</button>
    <button @click="Return" class="button-white">Code Eingeben</button>
    </div>

  </div>
</template>

<script setup>

const index = useIndex();
const todos = useTodos();
const data = useData();

const popup = usePopup();

function Restart() {
  index.value = 0;
  data.value = {};
  todos.value = {};
  navigateTo("/menu");
}
function Return() {
  navigateTo("/return");
}
function Info() {
  popup.value.isOpen = true;
  popup.value.content = "<h1> Headline </h1> <p> Text </p>";
}
</script>

<style scoped>
.textbox p {
  padding-bottom: 50px;
}

.button-container {
  display: flex;
  flex-direction: row;
  margin: 0;
}

</style>
-

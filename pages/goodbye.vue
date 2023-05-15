<template>
  <div class="slide-container">
    <div class="slide">
      <div class="textbox">
        <h1>Restart</h1>
      </div>
    </div>
    <button @click="Restart" type="button">Neu Starten</button>
  </div>
</template>

<script setup>

const index = useIndex();
const todos = useTodos();
const data = useData();


function Restart() {
  index.value = 0;
  data.value = {};
  todos.value = {};
  navigateTo("/");
}
</script>

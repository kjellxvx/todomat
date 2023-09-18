<template>
  <NuxtLayout name="web">
    <div class="slide">
      <HeaderComp />
      <CloseButton />
      <div class="textbox">
        <h1>To-dos</h1>
        <p v-if="todos">Hier findest du deine aufgelisteten To-dos</p>
        <p v-else>
          Du hast die Fragen so beantwortet, dass sich kein bestimmtes To-do für
          die Vorbereitung deines Todes ergibt. Überlege dir doch stattdessen,
          ob es Dinge gibt, die du vor deinem Tod noch erreicht oder erlebt
          haben möchtest. Mache eine Liste und tue noch heute etwas, das dich
          einem dieser Wünsche näher bringt.
        </p>
      </div>
      <div class="todos-container">
        <div class="todo" v-for="(todo, index) in todos" :key="index">
          <div v-if="todo.length != 0">
            <p class="todo-category">{{ category(index) }}</p>
            <p class="todo-text">{{ todo[0] }}</p>
          </div>
        </div>
      </div>

      <div class="button-container">
        <button v-if="userToken" @click="Save" class="button">Speichern</button>
        <button @click="Back" class="button-white">Zurück</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import HeaderComp from "../components/HeaderComp";
import CloseButton from "../components/CloseButton";
import { saveData } from "@/scripts/savedata.js";

const todos = useTodos();
const userToken = useUserToken();
const data = useData();
const loading = useLoading();

function category(index) {
  if (index.includes("A")) {
    return "Dein Körper";
  }
  if (index.includes("B")) {
    return "Deine Verabschiedung";
  }
  if (index.includes("C")) {
    return "Deine Daten";
  }
  if (index.includes("D")) {
    return "Deine Dinge";
  }
  if (index.includes("E")) {
    return "Dein Gedenken";
  }
  if (index.includes("F")) {
    return "Deine Geheimnisse";
  }
}

async function Save() {
  // navigateTo("/printweb");
  loading.value = true;
  await saveData(data.value, todos.value, userToken.value);
  await delay(10000);
  navigateTo("/");
}

// function Print() {
//   navigateTo("/printweb");
// }

function Back() {
  navigateTo("/menu");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

onMounted(() => {
  // clean todos data and remove empy entries
  Object.keys(todos.value).forEach((key) => {
    // console.log(key, todos.value[key]);
    if (todos.value[key].length == 0) {
      delete todos.value[key];
    }
  });
});
</script>

<style scoped>
.todo-category {
  font-family: "IBMPlexSans-Medium", sans-serif;
  font-size: 26px;
  padding-bottom: 5px;
}

.todos-container {
  border: solid;
  border-width: 0 0 2px 0;
  border-color: black;
  margin-bottom: 40px;
}

.todo {
  width: 100%;
  border: solid;
  border-width: 2px 0 0 0;
  border-color: black;
  padding: 20px 0 20px 0;
  margin: 10px 0 10px 0;
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
-

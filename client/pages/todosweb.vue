<template>
  <NuxtLayout name="web">
    <div class="slide">
      <HeaderComp />
      <CloseButton />
      <div class="textbox">
        <h1>ToDo’s</h1>
        <p v-if="todos">Hier findest du deine aufgelisteten ToDo’s</p>
        <p v-else>Deine Auswahl hat keine zu erledigenden Todos ergeben.</p>
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
        <button @click="Print" class="button">Beenden & Drucken</button>
        <button @click="Back" class="button-white">Zurück</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const todos = useTodos();

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

function Print() {
  navigateTo("/printweb");
}

function Back() {
  navigateTo("/menu");
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
.button-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space:normal;
}
.button{
  margin-right: 0px
}
.button-white{
  margin-right: 0px
}
}

</style>
-

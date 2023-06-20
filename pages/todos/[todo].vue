<template>
  <div class="slide">
    <HeaderComp
      />
    <h1>{{ headline }} - ToDo’s</h1>
    <p>Hier findest du deine aufgelisteten ToDo’s</p>
    <div class="todos-container">
      <div class="todo" v-for="(todo, index) in printTodos" :key="index">
        <div class="checkbox"></div>
        <div class="todo-text">
          <p class="p2">{{ todo }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="button-container">
    <button @click="Print" class="button">Auschecken und Ausdrucken</button>
  </div>
</template>

<script setup>
const route = useRoute();
const todos = useTodos();
const printTodos = ref([]);
const headline = ref("");

printTodos.value = Object.entries(todos.value)
  .filter(([key, _]) => key.includes(route.params.todo))
  .flatMap(([_, value]) => value);


async function Print() {
  navigateTo("/print");
}

onMounted(() => {
  headline.value = route.params.todo.includes("A")
    ? "Dein Körper"
    : route.params.todo.includes("B")
    ? "Deine Verabschiedung"
    : route.params.todo.includes("C")
    ? "Deine Daten"
    : route.params.todo.includes("D")
    ? "Deine Dinge"
    : route.params.todo.includes("E")
    ? "Deine Gedenken"
    : route.params.todo.includes("F")
    ? "Deine Geheimnisse"
    : "";
});

</script>

<style scoped>
.todos-container {
  width: 100%;
  margin: 40px 0 0 15px;
}

.todo {
  display: flex;
  margin: 0 0 30px 0;
}
.checkbox {
  width: 30px;
  height: 30px;
  border-style: solid;
  margin: 5px 25px 0 0;
}
.todo-text {
  width: 800px;
}

.todo-text p {
  font-size: 20px;
}

</style>

<template>
  <NuxtLayout name="customtodosweb">
    <div id="pdf-container" class="pdf-container">
      <div class="content-container">
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
      </div>
    </div>

    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import html2pdf from "html2pdf.js";
import { saveData } from "@/scripts/savedata.js";

const loading = ref(false);

const userToken = useUserToken();
// const url = ref("http://localhost:3000/return");
const url = ref("https://todomat.org/return");
const todos = useTodos();
const noTodos = ref(true);
const data = useData();

async function Print() {
  // console.log("USER TOKEN");
  // console.log(userToken.value);
  await saveData(data.value, todos.value, userToken.value);
  url.value += `?code=${userToken.value}`; // Append the userToken.value to the home URL
  // console.log(url.value);
  exportToPDF();
  await delay(10000);
  navigateTo("/");
}

const exportToPDF = () => {
  html2pdf(document.getElementById("pdf-container"), {
    margin: 0,
    filename: "Todomat.pdf",
    image: { type: "pdf", quality: 0.98 },
    html2canvas: { dpi: 300, letterRendering: true },
    userUnit: 300,
    jsPDF: { unit: "mm", format: [210, 298], orientation: "portrait" },
  });
};

function transformTodos() {
  Object.keys(todos.value).forEach((key) => {
    // console.log(key, todos.value[key]);
    if (todos.value[key].length == 0) {
      delete todos.value[key];
    }
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
    return "Deine Gedenken";
  }
  if (index.includes("F")) {
    return "Deine Geheimnisse";
  }
}

onMounted(() => {
  transformTodos();
  loading.value = true;
  Print();
});
</script>

<style scoped>
.pdf-container {
  height: 100%;
  width: 210mm;
  background-color: white;
  /* padding: 60px 40px 40px 40px; */
}

.content-container {
  padding: 60px 40px 40px 40px;
}

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
</style>

<template>
  <NuxtLayout name="custom">
    <div id="pdf-container" class="pdf-container">
      <div class="header-container">
        <p class="receipt">Receipt</p>
        <p class="logo">TODOMAT</p>
      </div>
      <div class="code-container">
        <div class="code-box">
          <p class="p1">
            Persönlicher Code für die Fortführung Deiner Koniguaration auf
            todomat.org:
          </p>
          <div class="code-char-container">
            <div class="char-underline" v-for="char in userToken" :key="char">
              <div class="char-container">
                <p class="p2">{{ char }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="qr-code-box">
          <div class="mark-container">
            <div class="marks-top">
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
            </div>
            <div class="marks-bottom">
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
              <div class="mark">
                <div class="mark-vertical"></div>
                <div class="mark-horizontal"></div>
              </div>
            </div>
          </div>
          <div class="qr-code">
            <qrcode-vue :value="url" :size="size" level="H" />
          </div>
        </div>
      </div>
      <p class="p3">
        Du kannst Deine Eingaben jederzeit anpassen und aktualisieren. Bitte
        sicher aufbewahren und hinterlegen!
      </p>
      <div v-if="noTodos == false">
        <div class="p2-container">
          <p class="p2">
            Gut gemacht! Du hast dir Zeit genommen, dir wichtige Gedanken über
            deinen Tod und den damit einher gehenden Abschied zu machen.
          </p>
        </div>
        <div class="p2-container">
          <p class="p2">
            Suche dir ein To-Do aus, mit dem du (am besten noch heute) beginnen
            möchtest.
          </p>
        </div>
        <div class="todos-container">
          <div class="todo" v-for="(todo, index) in printTodos" :key="index">
            <div class="checkbox"></div>
            <div class="todo-text">
              <p class="p2">{{ todo }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="noTodos == true">
        <div class="p2-container">
          <p class="p2">
            Du hast alle Fragen so beantwortet, dass es keine Todos gibt.
          </p>
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
import PocketBase from "pocketbase";
import QrcodeVue from "qrcode.vue";

const local = useLocal();
const loading = ref(false);
const url = ref("http://localhost:3000/return");
// const url = ref("https://todomat.org/return");
const size = 160;

const userToken = useUserToken();
const todos = useTodos();
const selectedTodo = useSelectedTodo();
const printTodos = ref([]);
const noTodos = ref(true);
const data = useData();

async function saveData(data, todos, token) {
  const serverUrl = "http://localhost:3333/save";
  const body = JSON.stringify({
    data: { ...data },
    todos: { ...todos },
    token,
  });

  try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData.message);
      const token = responseData.token;
      userToken.value = token;
      url.value += `?code=${userToken.value}`; // Append the userToken.value to the home URL
      console.log(url.value);
    } else {
      console.log("Error saving data:", response.status);
    }
  } catch (error) {
    console.log("Error saving data:", error.message);
  }
}

async function Print() {
  // //////////////////////////////////////////////////////////////////////////////////////////////////
  // //////////////////                                                              //////////////////
  // //////////////////                       DATA BASE CODE HERE                    //////////////////
  // //////////////////                                                              //////////////////
  // //////////////////////////////////////////////////////////////////////////////////////////////////

  // // console.log(data.value);
  // // console.log(todos.value);

  // // Push "data.value" and "todos.value" to the database
  // const user_data = {
  //   data: data.value,
  //   todos: todos.value,
  // };

  // if (userToken.value == false) {
  //   // Create new record
  //   const record = await pb.collection("user_data").create(user_data);

  //   // Generate User Token
  //   userToken.value = record.id;
  //   console.log("Created new record: " + userToken.value);
  //   url.value += `?code=${userToken.value}`; // Append the userToken.value to the home URL
  //   console.log(url.value);
  // } else {
  //   // If user Token already exists then ->
  //   // Update record
  //   const record = await pb
  //     .collection("user_data")
  //     .update(userToken.value, user_data);
  //   console.log("Updated record: " + userToken.value);
  // }

  // pb.authStore.clear();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  console.log("USER TOKEN");
  console.log(userToken.value);
  await saveData(data.value, todos.value, userToken.value);

  exportToPDF();
  // await delay(10000);
  await delay(50000);

  if (local.value == true) {
    navigateTo("/?local=true");
  } else {
    navigateTo("/");
  }
}

const exportToPDF = () => {
  html2pdf(document.getElementById("pdf-container"), {
    margin: 0,
    filename: "Todomat.pdf",
    image: { type: "pdf", quality: 0.98 },
    html2canvas: { dpi: 300, letterRendering: true },
    jsPDF: { unit: "mm", format: [317.5, 476.25], orientation: "portrait" },
  });
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

onMounted(() => {
  // loading.value = true;
  Print();

  printTodos.value = Object.entries(todos.value)
    .filter(
      ([key, value]) =>
        key.startsWith(selectedTodo.value.letter) && Array.isArray(value)
    )
    .flatMap(([key, value]) => value);

  if (printTodos.value.length === 0) {
    noTodos.value = true;
  } else {
    noTodos.value = false;
  }
  // console.log("All ToDos: ");
  // console.log(todos.value);
  // console.log("Selected ToDo category: " + selectedTodo.value.letter);
  // console.log("Print ToDos: ");
  // console.log(printTodos);
});
</script>

<style scoped>
.pdf-container {
  height: 100%;
  border-style: solid;
  border-color: white;
  background: white;
  padding: 60px 40px 40px 40px;
}
.header-container {
  display: flex;
  justify-content: space-between;
  margin: 0 10px 40px 10px;
}
.code-container {
  display: flex;
  justify-content: space-between;
}

.code-box {
  width: 712px;
  height: 277px;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  border-radius: 18px;
}

.qr-code-box {
  width: 277px;
  height: 277px;
  position: relative;
}

.mark-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mark {
  position: relative;
  width: 55px;
  height: 55px;
}

.marks-top {
  display: flex;
  justify-content: space-between;
}

.marks-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.mark-horizontal {
  position: absolute;
  width: 55px;
  height: 27.5px;
  border-style: solid;
  border-width: 0 0 2px 0;
  border-color: black;
}

.mark-vertical {
  position: absolute;
  width: 27.5px;
  height: 55px;
  border-style: solid;
  border-width: 0 2px 0 0px;
  border-color: black;
}

.qr-code {
  width: 160px;
  height: 160px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: black;
  color: black; */
}

.code-char-container {
  display: flex;
  justify-content: space-between;
  padding: 10px 200px 10px 100px;
}

.char-underline {
  width: 40px;
  border-style: solid;
  border-width: 0 0 1px 0px;
  border-color: black;
}

.char-container {
  padding: 2px;
  display: flex;
  justify-content: center;
}

.p1 {
  margin: 30px;
  width: 500px;
  font-size: 28px;
}

.p2 {
  margin-top: 10px;
  font-size: 40px;
}

.p2-container {
  margin: 40px 0 0 15px;
  width: 90%;
}

.p3 {
  width: 600px;
  margin: 20px 0 0 15px;
  font-size: 20px;
}

.receipt {
  font-size: 32px;
}

.logo {
  font-size: 45px;
  font-family: "IBMPlexSans-Bold";
}

.todos-container {
  margin: 40px 0 0 15px;
}
.checkbox {
  width: 50px;
  height: 50px;
  border-style: solid;
  margin: 22px 20px 0 0;
}
.todo-text {
  width: 1100px;
}

.todo {
  display: flex;
  margin: 0 0 30px 0;
}

.loading-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  /* backdrop-filter: blur(5px); */
  background: white;
}

.loading-spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid var(--primary-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

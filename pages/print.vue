<template>
  <div class="pdf-container">
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
        <div class="qr-code"></div>
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
</template>

<script setup>
import PocketBase from "pocketbase";

/*const pb = new PocketBase('http://127.0.0.1:8090');
const authData = await pb.admins.authWithPassword('maxmustermann@mail.de', 'password123');*/

const pb = new PocketBase("https://delightful-artist.pockethost.io");
const authData = await pb.admins.authWithPassword(
  "yinebo1036@andorem.com",
  "password123"
);

const userToken = useUserToken();
const todos = useTodos();
const printTodos = ref([]);
const noTodos = ref(true);
const data = useData();

async function Print() {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  // console.log(data.value);
  // console.log(todos.value);

  // Push "data.value" and "todos.value" to the database
  const user_data = {
    data: data.value,
    todos: todos.value,
  };

  if (userToken.value == false) {
    // Create new record
    const record = await pb.collection("user_data").create(user_data);

    // Generate User Token
    userToken.value = record.id;
    console.log("Created new record: " + userToken.value);
  } else {
    // If user Token already exists then ->
    // Update record
    const record = await pb
      .collection("user_data")
      .update(userToken.value, user_data);
    console.log("Updated record: " + userToken.value);
  }

  pb.authStore.clear();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  navigateTo("/print");
}

onMounted(() => {
  Print();
  printTodos.value = Object.values(todos.value).flat();
  if (printTodos.value.length == 0) {
    noTodos.value = true;
  } else {
    noTodos.value = false;
  }
});
</script>

<style scoped>
.pdf-container {
  width: 1200px;
  height: 1800px;
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
  background-color: black;
  color: black;
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

</style>

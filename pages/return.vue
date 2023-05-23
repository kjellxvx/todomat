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
      <div class="close-container">
        <h1>
          Wilkommen zurück <br />
          beim Todomat!
        </h1>
        <button @click="Close" class="button-close">
          <i class="fa fa-times-circle" aria-hidden="true"></i>
        </button>
      </div>

      <p>
        Bitte logge dich hier mit deinem 8-stelligen Code ein, den du unten auf
        deinem Ausdruck finden kannst.
      </p>
    </div>
    <div class="button-container">
      <input
        type="text"
        id="codeInput"
        v-model="inputText"
        placeholder="Code"
        @input="onInputChange"
        @focus="onInputFocus"
      />
      <button @click="Start" class="button">Einloggen</button>
    </div>
  </div>
  <div class="keyboard-container" :style="{ display: activateKeyboard() }">
    <div class="keyboard">
      <SimpleKeyboard @onChange="onChange" />
    </div>
  </div>
</template>
<script setup>
import SimpleKeyboard from "../components/SimpleKeyboard";
import PocketBase from "pocketbase";

// const apiUser = process.env.API_USER;
// const apiSecret = process.env.API_SECRET;

// const pb = new PocketBase("https://delightful-artist.pockethost.io");
// const authData = await pb.admins.authWithPassword(apiUser, apiSecret);

const pb = new PocketBase('https://delightful-artist.pockethost.io');
const authData = await pb.admins.authWithPassword('yinebo1036@andorem.com', 'password123');

const keyboard = useKeyboard();
const inputText = ref("");

const todos = useTodos();
const data = useData();
const local = useLocal();

const route = useRoute();

// Check if access via QR Code
onMounted(() => {
  if (route.query.code != undefined) {
    Start(true);
    console.log(route.query.code);
  }
});

// this method is called a textfield is active
function activateKeyboard() {
  if (local.value == true) {
    if (keyboard.value === true) {
      return "flex";
    } else {
      return "none";
    }
  } else {
    return "none";
  }
}

// This method is called when the text input is changed using the real keyboard
function onInputChange(event) {
  const input = event.target.value;
  console.log("Input changed directly:", input);
}

// This method is called when the text input is changed using the on screen keyboard
function onChange(input) {
  inputText.value = input;
}

// This method is called when the input is focused
function onInputFocus() {
  keyboard.value = true;
}

async function Start(qrCode) {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  //const code = inputText.value;
  const userData = { data: {}, todos: {} };
  const storedData = useStoredData();
  const userToken = useUserToken();

  if (qrCode == true) {
    userToken.value = route.query.code;
  } else {
    userToken.value = inputText.value;
  }

  // Check if the code is present in the database
  const record = await pb.collection("user_data").getOne(userToken.value, {
    expand: "relField1,relField2.subRelField",
  });

  // If present then ->
  if (record != null) {
    userData.data = record.data;
    userData.todos = record.todos;
    storedData.value = userData;
    data.value = storedData.value.data;
  } else {
    // Error Wrong Code
  }

  pb.authStore.clear();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  navigateTo("/menu");
}

function Close() {
  navigateTo("/hello");
}
</script>

<style scoped>
.button-container {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
}

.button-container input {
  width: 250px;
  margin-right: 20px;
}

.close-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>

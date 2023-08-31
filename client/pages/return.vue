<template>
  <img
    class="rip"
    src="~assets/rip/rip.png"
    alt=""
    style="
      display: none;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9999;
    "
  />
  <div class="slide">
    <HeaderComp /> 
    <CloseButton />
    <div class="textbox">
      <h1>
        Wilkommen zurück <br />
        beim Todomat!
      </h1>
      <p>
        Bitte logge dich hier mit deinem 8-stelligen Code ein, den du unten
        <br />
        auf deinem Ausdruck finden kannst.
      </p>
    </div>
    <div class="button-container">
      <input
        class="codeInput"
        type="text"
        v-model="inputText"
        placeholder="Code"
        @input="onInputChange"
        @focus="onInputFocus"
        @click.stop
      />
      <button @click="Start" class="button">Einloggen</button>
    </div>
  </div>
  <div
    class="keyboard-container"
    ref="keyboardContainerRef"
    :style="{ display: activateKeyboard() }"
  >
    <div class="keyboard">
      <SimpleKeyboard @onChange="onChange" />
    </div>
  </div>
</template>

<script setup>
import HeaderComp from "../components/HeaderComp";
import CloseButton from "../components/CloseButton";
import SimpleKeyboard from "../components/SimpleKeyboard";
import pdfPath from "~/assets/rip/RIP_Todomat.pdf";

const userData = { data: {}, todos: {} };
const storedData = useStoredData();
const userToken = useUserToken();

const keyboard = useKeyboard();
const keyboardContainerRef = ref(null);

const inputText = ref("");
const loading = useLoading(false);
const data = useData();
const todos = useTodos();
const local = useLocal();
const route = useRoute();
const popup = usePopup();

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

function onInputFocus() {
  keyboard.value = true;
}

function onChange(input) {
  inputText.value = input;
}

async function fetchData(token) {
  try {
    const response = await fetch(
      // `http://localhost:3333/retrieve?token=${token}`
      `https://api.todomat.org/retrieve?token=${token}`
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const fetchedData = await response.json();

    if (fetchedData != null) {
      userData.data = fetchedData.userData.data;
      userData.todos = fetchedData.userData.todos;
      storedData.value = userData;
      data.value = storedData.value.data;
      todos.value = storedData.value.todos;
      loading.value = false;
      navigateTo("/menu");
    }
  } catch (error) {
    console.error(error);
    if ((error = "Invalid userToken")) {
      // console.log("Invalid userToken");
      loading.value = false;
      popup.value.isOpen = true;
      popup.value.content =
        '<p class="popup-headline">Falscher Code</p><p class="popup-text">Bitte versuch es erneut und gib einen richtigen Code ein.</p>';
    }
  }
}

async function Start(qrCode) {
  loading.value = true;
  if (qrCode == true) {
    userToken.value = route.query.code;
  } else {
    userToken.value = inputText.value;
  }

  if (userToken.value != "RIP") {
    await fetchData(userToken.value);
  } else {
    // SECRET RIP MODE
    // console.log("RIP MODE ACTIVATED");
    toggleRipMode(true);
    loading.value = false;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "RIP_Todomat.pdf";
    link.click();
    await delay(100000);
    toggleRipMode(false);
    navigateTo("/start");
  }
}

// Function to handle the click outside event
const handleClickOutside = (event) => {
  if (
    keyboardContainerRef.value &&
    !keyboardContainerRef.value.contains(event.target)
  ) {
    keyboard.value = false; // Set keyboard to false when clicked outside
    // console.log("Clicked outside the keyboard");
  }
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toggleRipMode(rip) {
  const image = document.querySelector(".rip");
  if (image) {
    image.style.display = rip ? "block" : "none";
  }
}

// Register the click event listener
onMounted(() => {
  if (route.query.code) {
    // console.log(route.query.code);
    Start(true);
  }
  document.addEventListener("click", handleClickOutside);
});

// Clean up the event listener on component unmount
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.button-container input {
  width: 250px;
  margin-right: 20px;
}

.close-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

@media only screen and (max-width: 1020px) {
  .button-container {
    display: block;
    white-space: normal;
  }

  h1{
    max-width: 300px;
  }
}
</style>

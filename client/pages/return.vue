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
    <div class="close-button-container">
      <div class="close-button" @click="Close">
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="30.0886"
            height="30.0886"
            rx="15.0443"
            transform="matrix(1 0 0 -1 0.911438 30.8496)"
            fill="#EAEAEA"
          />
          <mask
            id="mask0_231_126"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="25"
            height="25"
          >
            <rect
              x="3.96295"
              y="3.37695"
              width="24"
              height="24"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_231_126)">
            <path
              d="M9.63065 23.4653L15.963 17.133L22.2953 23.4653L23.513 22.2476L17.1807 15.9153L23.513 9.58298L22.2953 8.36523L15.963 14.6975L9.63065 8.36523L8.4129 9.58298L14.7452 15.9153L8.4129 22.2476L9.63065 23.4653Z"
              fill="black"
            />
          </g>
        </svg>
      </div>
    </div>
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

    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
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
import SimpleKeyboard from "../components/SimpleKeyboard";
import pdfPath from "~/assets/rip/RIP_Todomat.pdf";

const userData = { data: {}, todos: {} };
const storedData = useStoredData();
const userToken = useUserToken();

const keyboard = useKeyboard();
const keyboardContainerRef = ref(null);

const inputText = ref("");
const loading = ref(false);
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

function onInputChange(event) {
  const input = event.target.value;
  // console.log("Input changed directly:", input);
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

function Close() {
  navigateTo("/start");
}

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

@media only screen and (max-width: 1024px) {
  .button-container {
    display: block;
    white-space: normal;
  }

  h1{
    max-width: 300px;
  }
}
</style>

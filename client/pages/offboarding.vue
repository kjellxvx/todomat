<template>
  <div class="slide">
    <HeaderComp />
    <div class="textbox">
      <div></div>
      <h1>Herzlichen Glückwunsch.</h1>
      <p>
        Du hast heute damit begonnen hast, dich auf deinen Tod vorzubereiten!
      </p>
    </div>
    <div class="info-container">
      <div class="info-left">
        <div class="info">
          <p>
            Der Todomat wird dir auf Basis deiner vorherigen Antworten noch
            To-Do‘s empfehlen, das du in einem ruhigen Moment am besten noch
            heute oder in den nächsten Tagen erledigst.
          </p>
        </div>
        <div class="info">
          <p>
            Auf dem Ausdruck bekommst du einen QR-Code, mit dem du später deine
            bisherige Konfiguration am Todomaten oder auch im Internet wieder
            aufrufen und weitere Kategorien bearbeiten kannst.
          </p>
        </div>
        <div class="info"></div>
      </div>
      <div class="info-right">
        <div class="icon">
          <svg
            width="91"
            height="91"
            viewBox="0 0 91 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5183 17.3282L49.2807 47.1971L71.2623 70.2114"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M72.1892 35.2363L72.3631 71.3643L35.3591 71.9235"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="icon">
          <svg
            width="91"
            height="91"
            viewBox="0 0 91 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5183 17.3282L49.2807 47.1971L71.2623 70.2114"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
            <path
              d="M72.1892 35.2363L72.3631 71.3643L35.3591 71.9235"
              stroke="black"
              stroke-width="3.83045"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button v-if="!userToken" @click="Submit" class="button">
        Jetzt ausdrucken
      </button>
      <button v-else @click="Save" class="button">Daten speichern</button>
    </div>
  </div>
  <div v-if="loading" class="loading-container">
    <div class="loading-spinner"></div>
  </div>
</template>

<script setup>
import { saveData } from "@/scripts/savedata.js";
const userToken = useUserToken();
const todos = useTodos();
const data = useData();
const loading = ref(false);

function Submit() {
  navigateTo("/submit");
}

async function Save() {
  loading.value = true;
  await saveData(data.value, todos.value, userToken.value);
  await delay(5000);
  navigateTo("/?local=true");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
</script>

<style scoped>
.info-container {
  display: flex;
}

.info-left {
  margin: 0 50px 0 0;
  width: 60%;
}

.info-right {
  margin-top: 0px;
}

.info {
  padding: 20px 0 20px 0;
  border-top: solid;
}

.icon {
  width: 65px;
  height: 65px;
  margin: 10px 0 60px 0;
  transform: scale(-1, 1);
}
.info p {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 18.15px;
  text-align: left;
  margin: 0px;
}

@media only screen and (max-width: 1020px) {
  .info-left {
    display: none;
  }

  .info {
    border-top: none;
  }

  .textbox p {
    padding-bottom: 0;
  }
}
</style>
-

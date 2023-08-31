<template>
  <div class="page-container">
    <slot />
    <div v-if="local" class="local-indicator"></div>
    <div class="button-container">
      <button
        @click="goToPage(nextPage)"
        class="button"
        v-bind:style="{ display: displayNavigation }"
      >
        Weiter
      </button>
      <button
        @click="goBack(previousPage)"
        class="button-white"
        v-bind:style="{ display: displayNavigation }"
      >
        Zurück
      </button>
    </div>
  </div>
  <div v-if="popup.isOpen" class="popup-container">
    <div class="popup">
      <div v-html="popup.content"></div>
      <div class="button-container">
        <div @click="popup.isOpen = false" class="popup-button">Schließen</div>
      </div>
    </div>
  </div>
  <div v-if="loading" class="loading-container">
    <div class="loading-spinner"></div>
  </div>
  <div v-if="timeout" class="timeout-container">
    <div class="popup">
      <p class="popup-headline">Bist du noch da?</p>
      <p class="popup-text">
        Deine Auswahl wird in {{ countdown }} Sekunden zurückgesetzt.
      </p>
      <button class="popup-button">Ich bin noch da!</button>
    </div>
  </div>
</template>

<script setup>
const complete = useComplete();
const data = useData();
const route = useRoute();
const index = useIndex();
const order = useOrder();
const local = useLocal();
const popup = usePopup();
const loading = useLoading();

const countdown = ref(60);
const timeout = useTimeout();

const intervalId = setInterval(() => {
  if (timeout.value === true) {
    countdown.value--;
    if (countdown.value === 0) {
      clearInterval(intervalId);
      navigateTo("/?local=true");
      timeout.value = false;
      countdown.value = 60;
    }
  } else {
    countdown.value = 60;
  }
}, 1000);

// Logic for rendering the page order
const slides = computed(() => {
  const slides = [
    "menu",
    "A1",
    "A2",
    "confirmation",
    "B1",
    "confirmation",
    "C1",
    "C2",
    "C3",
    "confirmation",
    "D1",
    "D2",
    "D3",
    "D4",
    "confirmation",
    "E1",
    "E2",
    "E3",
    "E4",
    "confirmation",
    "F1",
    "F2",
    "F3",
    "confirmation",
  ];
  if (data.value["A2"] && data.value["A2"].options == "A2.1") {
    const pos = slides.indexOf("A2");
    slides.splice(pos + 1, 0, "A2_1_1", "A2_1_2");
    // console.log("added Slides A2_1_1 and A2_1_2");
  }
  if (data.value["A2"] && data.value["A2"].options == "A2.2") {
    const pos = slides.indexOf("A2");
    slides.splice(pos + 1, 0, "A2_2");
  }
  if (data.value["A2"] && data.value["A2"].options == "A2.3") {
    const pos = slides.indexOf("A2");
    slides.splice(pos + 1, 0, "A2_3");
  }
  if (data.value["A2"] && data.value["A2"].options == "A2.4") {
    const pos = slides.indexOf("A2");
    slides.splice(pos + 1, 0, "A2_4");
  }
  if (data.value["B1"] && data.value["B1"].options == "B1.1") {
    const pos = slides.indexOf("B1");
    slides.splice(pos + 1, 0, "B1_1");
  }
  if (data.value["B1"] && data.value["B1"].options == "B1.2") {
    const pos = slides.indexOf("B1");
    slides.splice(pos + 1, 0, "B1_2");
  }
  if (data.value["B2_1"] && data.value["B2_1"].options == "B2.1.3") {
    const pos = slides.indexOf("B2_1");
    slides.splice(pos + 1, 0, "B2_1_3_1", "B2_1_3_2");
  }
  order.value = slides;
  return slides;
});

const displayNavigation = computed(() => {
  if (route.name !== "id") {
    return "none";
  } else {
    return "block";
  }
});

const previousPage = computed(() => slides.value[index.value - 1]);
const nextPage = computed(() => slides.value[index.value + 1]);

function goToPage(page) {
  if (complete.value === true) {
    if (index.value >= 0) {
      index.value = slides.value.indexOf(page);
      navigateTo(`/${page}`);
    }
  } else {
    popup.value.isOpen = true;
    popup.value.content = `<p class=\"popup-headline\">Hinweis</p><p class=\"popup-text\"> Vervollständige die Auswahl, um weiter zu kommen.`;
    console.log("Vervollständige die Auswahl, um weiter zu kommen.");
  }
}

function goBack(page) {
  if (index.value >= 0) {
    if (page == "confirmation") {
      index.value = 0;
      navigateTo(`/menu`);
    } else {
      index.value = slides.value.indexOf(page);
      navigateTo(`/${page}`);
    }
  }
}
onMounted(() => {});
</script>

<style>
.local-indicator {
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: blue;
  border-radius: 100%;
  top: 10px;
  left: 10px;
}

.data-container {
  height: 0px;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 6em);
  height: calc(100% - 4.6em);
  margin: 2.3em 3em;
  max-height: 768px;
}

h1 {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-size: 65px;
  text-align: left;
  margin: 0px;
  padding-bottom: 20px;
}

h2 {
  font-family: "IBMPlexSans-Medium", sans-serif;
  max-width: 80%;
  font-size: 26px;
  text-align: left;
  margin: 0px;
  padding-bottom: 40px;
}

p {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 26px;
  text-align: left;
  margin: 0px;
}

.p-small {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 15px;
  text-align: left;
  margin: 0px;
}

.p-bold {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-size: 26px;
  text-align: left;
  margin: 0px;
}

.textbox p {
  padding-bottom: 30px;
}

.slide {
  width: 100%;
}

.brand {
  font-family: "IBMPlexSans-Bold", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  margin: 0px;
}

.slogan {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 15px;
  margin: 0 0 0 15px;
}
.progress-counter {
  height: 4px;
  background-color: black;
  width: 100%;
  margin-right: 7px;
  border-radius: 30px;
}

.black {
  background-color: #3c3737;
  opacity: 50%;
}

.grey {
  background-color: #717171;
  opacity: 15%;
}

.progress-counter:last-child {
  margin-right: 0;
}

.data-container {
  display: none;
}

@media only screen and (max-width: 1020px) {
  h1 {
    font-size: 35px;
  }

  h2 {
    font-family: "IBMPlexSans-Medium", sans-serif;
    max-width: 100%;
    font-size: 26px;
    text-align: left;
    margin: 0px;
    padding-bottom: 30px;
  }

  p {
    font-size: 20px;
  }

  .p-bold {
    font-size: 20px;
  }

  .page-container {
    width: calc(100% - 2em);
    height: calc(100% - 22.2476em);
    margin: 1.2em 1em;
  }
}
</style>

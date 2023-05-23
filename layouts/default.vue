<template>
  <div class="page-container">
    <slot />
    <!-- <button
      @click="goToPage(previousPage)"
      :disabled="!isButtonEnabled"
      class="arrow left"
      v-bind:style="{ display: displayNavigation }"
    >
      Previous
    </button> -->
    <button
      @click="goToPage(nextPage)"
      :disabled="!isButtonEnabled"
      class="arrow right"
      v-bind:style="{ display: displayNavigation }"
    >
      Weiter
    </button>
  </div>

  <div class="data-container">
    <div>
      <p>complete?</p>
      <p>{{ complete }}</p>
    </div>
    <div>
      <p>todos</p>
      <p>{{ todos }}</p>
    </div>
    <div>
      <p>entered data</p>
      <p>{{ data }}</p>
    </div>
    <div>
      <p>page index</p>
      <p>{{ index }}</p>
    </div>
    <div>
      <p>order</p>
      <p>{{ order }}</p>
    </div>

    <div>
      <p>local</p>
      <p>{{ local }}</p>
    </div>

    <div>
      <p>user token</p>
      <p>{{ userToken }}</p>
    </div>

    <div>
      <p>stored data</p>
      <p>{{ storedData }}</p>
    </div>
  </div>

  <div v-if="popup.isOpen" class="popup-container">
    <div class="popup">
      <div v-html="popup.content"></div>
      <button @click="popup.isOpen = false" class="close">Close</button>
    </div>
  </div>
</template>

<script setup>
// SLIDE ORDER:
// Start
// Menu
// A1,
// A2,
//   A2_1
//   A2_2
// Menu
//   B1,
//   B2,
//   B2_1
//     B2_1_3_1
//     B2_1_3_1
// Menu

const complete = useComplete();
const todos = useTodos();
const data = useData();
const route = useRoute();
const index = useIndex();
const order = useOrder();
const local = useLocal();
const popup = usePopup();
const storedData = useStoredData();
const userToken = useUserToken();

// Logic for rendering the page order
const slides = computed(() => {
  const slides = [
    "menu",
    "A1",
    "A2",
    "menu",
    "B1",
    "B2",
    "menu",
    "C1",
    "menu",
    "D1",
    "menu",
    "E1",
    "menu",
    "F1",
    "menu",
  ];
  if (data.value["A2"] && data.value["A2"].options === "A2.1") {
    const pos = slides.indexOf("A2");
    slides.splice(pos + 1, 0, "A2_1", "A2_2");
  }
  if (data.value["B2"] && data.value["B2"].options === "B2.1") {
    const pos = slides.indexOf("B2");
    slides.splice(pos + 1, 0, "B2_1");
  }
  if (data.value["B2_1"] && data.value["B2_1"].options === "B2.1.3") {
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

// check if selection is complete
const isButtonEnabled = computed(() => {
  return complete.value;
});

const previousPage = computed(() => slides.value[index.value - 1]);
const nextPage = computed(() => slides.value[index.value + 1]);

function goToPage(page) {
  if (index.value >= 0) {
    index.value = slides.value.indexOf(page);
    navigateTo(`/${page}`);
  }
}

onMounted(() => {});
</script>

<style>
.popup-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
}

.popup {
  position: fixed;
  align-items: center;
  width: 80vw;
  height: 80vh;
  background-color: #ff8a00;
  z-index: 1000;
}

.data-container {
  height: 0px;
}

.page-container {
  height: 768px;
}

h1 {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-size: 65px;
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

.p-bold {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-size: 26px;
  text-align: left;
  margin: 0px;
}

.slide{
  margin: 28px 37px 28px 37px;
  height: 100%;
  display: flex;
  flex-direction: column;
}


.header-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
  align-items: center;
}

.brand {
  font-family: "IBMPlexSans-Bold", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  margin: 0px;
}

.slogan {
  font-family: "IBMPlexSans-Regular", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  margin: 0px;
}
.progress-counter {
  height: 4px;
  background-color: black;
  width: 100%;
  margin-right: 7px;
  border-radius: 30px;
  opacity: 15%;
}

.progress-counter:last-child {
  margin-right: 0;
}

</style>

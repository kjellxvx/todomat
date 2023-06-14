<template>
  <div class="page-container">
    <slot />
    <div class="gui">
      <div class="button-container">
        <button
          @click="goToPage(nextPage)"
          :disabled="!isButtonEnabled"
          class="button"
          v-bind:style="{ display: displayNavigation }"
        >
          Weiter
        </button>
        <button
          @click="goToPage(previousPage)"
          class="button-white"
          v-bind:style="{ display: displayNavigation }"
        >
          Zurück
        </button>
      </div>
    </div>
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
      <div class="popup-close-button" @click="popup.isOpen = false">
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
      <div v-html="popup.content"></div>
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
    "menu",
    "C1",
    "C2",
    "C3",
    "menu",
    "D1",
    "D2",
    "D3",
    "D4",
    "menu",
    "E1",
    "E2",
    "E3",
    "E4",
    "menu",
    "F1",
    "F2",
    "F3",
    "menu",
  ];
  if (data.value["A2"] && data.value["A2"].options === "A2.1") {
    const pos = slides.indexOf("A2");
    slides.splice(pos + 1, 0, "A2_1_1", "A2_1_2");
  }
  if (data.value["A2"] && data.value["A2"].options === "A2.2") {
    const pos = slides.indexOf("A2");
    slides.splice(pos + 1, 0, "A2_2");
  }
  if (data.value["A2"] && data.value["A2"].options === "A2.3") {
    const pos = slides.indexOf("A2");
    slides.splice(pos + 1, 0, "A2_3");
  }
  if (data.value["A2"] && data.value["A2"].options === "A2.4") {
    const pos = slides.indexOf("A2");
    slides.splice(pos + 1, 0, "A2_4");
  }
  if (data.value["B1"] && data.value["B1"].options === "B1.1") {
    const pos = slides.indexOf("B1");
    slides.splice(pos + 1, 0, "B1_1");
  }
  if (data.value["B1"] && data.value["B1"].options === "B1.2") {
    const pos = slides.indexOf("B1");
    slides.splice(pos + 1, 0, "B1_2");
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
.data-container {
  height: 0px;
}

.page-container {
  height: 768px;
  display: flex;
  flex-direction: column;
}

.gui {
  /* margin-top: auto; */
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
  width: 770px;
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
  margin: 28px 37px 28px 37px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
}

.header-row {
  display: flex;
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
  font-size: 15px;
  margin: 0 0 0 15px;
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

.button-container {
  display: flex;
  flex-direction: row;
  margin: 0 37px 28px 37px;
}

.button-container button {
  margin-right: 20px;
}

.link {
  cursor: pointer;
  color: var(--secondary-color);
  font-family: "IBMPlexSans-Bold", sans-serif;
  text-decoration: underline;
}

.popup-link {
  cursor: pointer;
  color: var(--secondary-color);
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-size: 20px;
  text-decoration: underline;
  margin-left: 10px;
}

.popup-container {
  position: fixed;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
}

.popup {
  width: 300px;
  border-style: solid;
  border-radius: 10px;
  background-color: white;
  z-index: 1000;
  margin: 38px;
  padding: 19px;
}

.popup-headline {
  font-family: "IBMPlexSans", sans-serif;
  font-size: 22px;
  text-align: left;
  margin: 0px;
  padding: 10px 0 20px 0;
  border: solid;
  border-width: 0 0 1px 0;
  border-color: black;
}

.popup-text {
  font-family: "IBMPlexSans", sans-serif;
  font-size: 15px;
  text-align: left;
  margin: 0px;
  padding: 20px 0 15px 0;
}

.popup-close-button {
  position: fixed;
  right: 50px;
  background-color: white;
  border-style: none;
  font-size: 35px;
  height: 39.39px;
  cursor: pointer;
}
</style>

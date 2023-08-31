<template>
  <div class="slide">
    <HeaderComp />
    <CloseButton />
    <h1 v-if="noSelection === 0">Womit möchtest Du starten?</h1>
    <h1 v-else>Womit geht's weiter?</h1>

    <div class="seperator"></div>
    <div class="menu-container">
      <!-- <div
        v-for="menuItem in menuItems"
        :key="menuItem.letter"
        class="menuItem"
        :style="{ backgroundColor: buttonColor(menuItem.letter) }"
      > -->
      <div
        v-for="menuItem in menuItems"
        :key="menuItem.letter"
        @click="navigate(menuItem.letter)"
        class="menuItem"
      >
        <p class="menu-h1">{{ menuItem.title }}</p>
        <!-- <p class="menu-p">
          {{ menuItem.description }}
        </p> -->
        <div v-if="menuItem.effect === '3'" class="effect-3-container">
          <div class="effect-3-1"></div>
          <div class="effect-3-2"></div>
          <div class="effect-3-3"></div>
        </div>
        <div v-if="menuItem.effect === '4'" class="effect-4-container">
          <div class="effect-4-1"></div>
          <div class="effect-4-2"></div>
          <div class="effect-4-3"></div>
        </div>
        <div v-if="menuItem.effect === '6'" class="effect-6-container">
          <div class="effect-6-1"></div>
          <div class="effect-6-2"></div>
        </div>
        <div v-else class="effect" :class="`effect-${menuItem.effect}`"></div>

        <div class="configure-button-container">
          <button
            @click="navigate(menuItem.letter)"
            :class="getButtonClass(menuItem.letter)"
          >
            <p>{{ getButtonLabel(menuItem.letter) }}</p>

            <svg
              v-if="isCategoryComplete(menuItem.letter)"
              class="complete-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="10"
              viewBox="0 0 20 10"
              fill="none"
            >
              <path
                d="M19.2835 5.65563C19.5301 5.40896 19.5301 5.00901 19.2835 4.76234L15.2636 0.742508C15.017 0.495831 14.617 0.495831 14.3703 0.742508C14.1237 0.989185 14.1237 1.38913 14.3703 1.6358L17.9435 5.20898L14.3703 8.78217C14.1237 9.02884 14.1237 9.42878 14.3703 9.67546C14.617 9.92214 15.017 9.92214 15.2636 9.67546L19.2835 5.65563ZM0.383545 5.84064H18.8368V4.57733H0.383545V5.84064Z"
                fill="black"
              />
            </svg>
          </button>
          <button
            class="menu-button-edit"
            @click="navigate(menuItem.letter)"
            v-if="!isCategoryComplete(menuItem.letter)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M0.40625 14.0759V12.0114H14.1701V14.0759H0.40625ZM2.12674 10.2909V8.18665L8.27547 2.05117L10.3665 4.14217L4.23099 10.2909H2.12674ZM3.15901 9.25863H3.77839L8.91601 4.14217L8.27547 3.50162L3.15901 8.63926V9.25863ZM11.0613 3.42487L8.97027 1.3471L9.98401 0.33336C10.1102 0.200127 10.2685 0.135276 10.4591 0.138809C10.6497 0.142341 10.8081 0.207192 10.9342 0.33336L12.0618 1.46089C12.1879 1.58706 12.2532 1.74367 12.2577 1.93072C12.2621 2.11777 12.2012 2.27791 12.075 2.41113L11.0613 3.42487Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button @click="Auschecken" class="button">Auschecken</button>
      <button v-if="!local" @click="viewTodos" class="button-white">
        To-Dos ansehen
      </button>
    </div>
  </div>
</template>

<script setup>
const index = useIndex();
const order = useOrder();
const data = useData();
const progress = useProgress();
const categories = useCategories();
const local = useLocal();
const noSelection = ref(progress.value.reduce((a, b) => a + b, 0));

const menuItems = [
  {
    letter: "A",
    title: "Dein Körper",
    effect: "1",
  },
  {
    letter: "B",
    title: "Deine Verabschiedung",
    effect: "2",
  },
  {
    letter: "C",
    title: "Deine Daten",
    effect: "3",
  },
  {
    letter: "D",
    title: "Deine Dinge",
    effect: "4",
  },
  {
    letter: "E",
    title: "Dein Gedenken",
    effect: "5",
  },
  {
    letter: "F",
    title: "Deine Geheimnisse",
    effect: "6",
  },
];

function navigate(letter) {
  letter = letter + "1";
  index.value = order.value.indexOf(letter);
  navigateTo(`/${letter}`);
}

function viewTodos() {
  navigateTo(`/todosweb`);
}



function Auschecken() {
  if (local.value == true) {
    navigateTo("/offboarding");
  } else {
    navigateTo("/offboardingweb");
  }
}

const getButtonLabel = (letter) => {
  if (isCategoryComplete(letter)) {
    return "Jetzt konfiguieren";
  }
  return "Fertig konfiguriert";
};

const isCategoryComplete = (letter) => {
  if (categories.value) {
    return !categories.value[letter].complete;
  }
  return "none";
};

const getButtonClass = (letter) => {
  return isCategoryComplete(letter)
    ? "menu-button-incomplete"
    : "menu-button-complete";
};

function updateCategories() {
  categories.value = Object.values(order.value)
    .filter((element) => element !== "menu" && element !== "confirmation")
    .reduce((acc, element) => {
      const key = element.charAt(0).toUpperCase();
      acc[key] = acc[key] || [];
      acc[key].push(element);
      return acc;
    }, {});

  const setCategoryComplete = (category) => {
    const elements = categories.value[category];
    return elements.every((element) => {
      const options = data.value[element]?.options;
      return options && options.length > 0;
    });
  };

  for (const category in categories.value) {
    if (setCategoryComplete(category)) {
      categories.value[category].complete = true;
    } else {
      categories.value[category].complete = false;
    }
  }

  for (const category in categories.value) {
    const index = category.charCodeAt(0) - 65;
    progress.value[index] = setCategoryComplete(category) ? 1 : 0;
  }
}
onMounted(() => {
  updateCategories();
});
</script>

<style scoped>
.seperator {
  width: 100%;
  height: 1.4px;
  background: black;
  margin-bottom: 50px;
}

.menu-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 33px;
  margin: 0 0 28px 0;
  position: relative;
  margin: 20px 0 30px 0;
}

.menuItem {
  border: solid 1px black;
  padding: 20px 15px 20px 15px;
  border-radius: 10px;
  background-color: #131126;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

h1 {
  padding-bottom: 8px;
}

.menu-h1 {
  text-align: center;
  font-size: 30px;
  padding: 20px;
  color: white;
  word-spacing: 100vw;
  z-index: 1;
}

.menu-button-complete {
  height: 1.8em;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  border: solid black 1.2px;
  border-radius: 1em;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 15.89px;
  padding: 0.2em 1.3em 0.2em 1.3em;
  cursor: pointer;
  z-index: 1;
}

.menu-button-complete p {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 15.89px;
  z-index: 1;
}

.menu-button-incomplete {
  height: 1.8em;
  background-color: white;
  color: black;
  border: solid black 1.2px;
  border-radius: 1em;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 15.89px;
  padding: 0.2em 1.3em 0.2em 1.3em;
  cursor: pointer;
  display: flex;
  z-index: 1;
}

.menu-button-incomplete p {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 15.89px;
  padding: 0 20px 0 20px;
  z-index: 1;
}

.menu-button-incomplete svg {
  align-self: center;
}

.configure-button-container {
  z-index: 1;
}

.menu-button-edit {
  height: 1.8em;
  background-color: white;
  color: black;
  border: solid black 1.2px;
  border-radius: 1em;
  font-size: 15.89px;
  padding: 0.2em 0.4em 0.2em 0.4em;
  cursor: pointer;
  margin-left: 5px;
  z-index: 1;
}

.menu-button-edit svg {
  margin-top: 2px;
  margin-left: 0.4px;
}

.effect-1 {
  position: absolute;
  width: 159.264px;
  height: 169.303px;
  margin-top: 32px;
  margin-left: 95px;
  background: #5ae9fd;
  flex-shrink: 0;
  border-style: solid;
  border-radius: 109.76px;
  border-width: 12.9px;
  border-color: #00e29a;
  filter: blur(40px);
  z-index: 0;
}

.effect-2 {
  position: absolute;
  width: 222.04px;
  height: 218.63px;
  margin-top: 55px;
  margin-left: -10px;
  background: #ff8a00;
  transform: skew(24deg, -10deg);
  border-radius: 150.31px;
  filter: blur(40px);
  z-index: 0;
}

.effect-3-container {
  position: absolute;
}

.effect-3-1 {
  position: absolute;
  width: 135px;
  height: 120px;
  margin-top: 40px;
  margin-left: 10px;
  background: #ff8a00;
  transform: skew(8deg, -6deg);
  border-radius: 150.31px;
  filter: blur(25px);
  z-index: 0;
}

.effect-3-2 {
  position: absolute;
  width: 140px;
  height: 120px;
  margin-top: -60px;
  margin-left: -60px;
  border-radius: 150.31px;
  background: #5ae9fd;
  border-style: solid;
  border-width: 12px;
  border-color: #00e29a;
  transform: skew(-5deg, 0deg);
  filter: blur(25px);
  mix-blend-mode: normal;
}

.effect-4-container {
  position: absolute;
}

.effect-4-1 {
  position: absolute;
  width: 140px;
  height: 150px;
  margin-top: 50px;
  margin-left: 20px;
  background: radial-gradient(
    circle,
    rgba(95, 129, 164, 1) 0%,
    rgba(74, 224, 116, 0.65) 100%
  );
  border-radius: 150.31px;
  transform: skew(3deg, 0deg);
  filter: blur(25px);
  mix-blend-mode: color;
}

.effect-4-2 {
  position: absolute;
  width: 180px;
  height: 180px;
  margin-top: -70px;
  margin-left: -180px;
  background: conic-gradient(rgba(255, 224, 114, 0), rgba(255, 224, 114, 1));
  border-radius: 150.31px;
  transform: skew(5deg, -10deg);
  rotate: -120deg;
  filter: blur(35px);
}

.effect-4-3 {
  position: absolute;
  width: 150px;
  height: 150px;
  margin-top: 35px;
  margin-left: -100px;
  border-radius: 150.31px;
  transform: skew(-5deg, -4deg);
  rotate: 60deg;
  background: rgba(90, 223, 253, 0.4);
  outline: solid 14px rgba(0, 226, 154, 0.4);
  outline-offset: -7px;
  filter: blur(28px);
}

.effect-5 {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 150px;
  margin-top: -100px;
  margin-left: 55px;
  background: radial-gradient(
    circle,
    rgba(95, 129, 164, 1) 0%,
    rgba(99, 73, 255, 0.37) 100%
  );
  transform: skew(10deg, 0deg);
  rotate: -30deg;
  filter: blur(28px);
  mix-blend-mode: screen;
}

.effect-6-container {
  position: absolute;
}

.effect-6-1 {
  position: absolute;
  width: 210px;
  height: 180px;
  border-radius: 150px;
  margin-top: 0px;
  margin-left: -60px;
  background: radial-gradient(
    circle,
    rgba(95, 129, 164, 1) 0%,
    rgba(99, 73, 255, 0.37) 100%
  );
  transform: skew(5deg, -3deg);
  rotate: -20deg;
  mix-blend-mode: screen;
  filter: blur(28px);
}

.effect-6-2 {
  position: absolute;
  width: 150px;
  height: 150px;
  margin-top: -55px;
  margin-left: 0px;
  border-radius: 150.31px;
  transform: skew(-5deg, -4deg);
  rotate: 60deg;
  background: rgba(90, 223, 253, 0.4);
  outline: solid 14px rgba(0, 226, 154, 0.4);
  outline-offset: -7px;
  filter: blur(28px);
}

@media only screen and (max-width: 1020px) {
  .menu-container {
    display: block;
  }

  .menuItem {
    margin-bottom: 1em;
  }

  h1 {
    width: 300px;
  }

  .seperator {
    margin-bottom: 10px;
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: normal;
  }

  .button {
    margin-right: 0px;
  }

  .button-white {
    margin-right: 0px;
  }

  .popup-button {
    margin-bottom: 10px;
    margin-right: 0px;
  }

  .popup-button-white {
    margin-right: 0px;
  }

  .popup .button-container {
    margin-bottom: 0px;
  }
}
</style>

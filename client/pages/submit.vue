<template>
  <div class="slide">
    <HeaderComp />
    <div class="textbox">
      <h1>Gratulation!</h1>
      <p>
        Du hast deinen Abschied sehr gut vorbereitet und alle Fragen
        beantwortet.
      </p>
      <p class="p-small">
        Nun kannst Du die offenen To-do‘s anschauen und erledigen, wenn du Zeit
        dafür hast. Mit welcher Kategorie möchtest Du beginnen? Diese ToDos
        werden dir auf dem Bon ausgedruckt. Alle anderen offenen To-Do‘s und
        deine beantworteten Fragen kannst Du jederzeit auf todomat.org einsehen
        und überarbeiten.
      </p>
    </div>
    <div class="menu-container">
      <template v-if="enabledMenuItems.length > 0">
        <button
          v-for="menuItem in enabledMenuItems"
          :key="menuItem.letter"
          class="menuItem"
          @click="selectMenuItem(menuItem)"
          :style="{
            opacity:
              selectedMenuItem && menuItem.letter === selectedMenuItem.letter
                ? '1'
                : '0.5',
          }"
        >
          <p class="menu-h1">{{ menuItem.title }}</p>
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
        </button>
      </template>
    </div>
    <p v-if="enabledMenuItems.length == 0">
      Deine Auswahl hat keine zu erledigenden Todos ergeben.
    </p>
    <div class="button-container">
      <button
        @click="Print"
        class="button"
        :disabled="!selectedMenuItem && enabledMenuItems.length > 0"
      >
        Auschecken und Ausdrucken
      </button>
    </div>
  </div>
</template>

<script setup>
const todos = useTodos();
const selectedTodo = useSelectedTodo();
const todoTopics = ref([]);
const selectedMenuItem = ref(null);

function selectMenuItem(menuItem) {
  selectedMenuItem.value = menuItem;
  selectedTodo.value = selectedMenuItem.value;
  console.log("Selected Todo Category:", selectedTodo.value);
}

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
    title: "Deine Gedenken",
    effect: "5",
  },
  {
    letter: "F",
    title: "Deine Geheimnisse",
    effect: "6",
  },
];

const isTodoTopicDisabled = (letter) => {
  return !todoTopics.value.includes(letter);
};

const enabledMenuItems = computed(() => {
  return menuItems.filter((menuItem) => !isTodoTopicDisabled(menuItem.letter));
});

async function Print() {
  console.log(selectedMenuItem.value);
  navigateTo("/print");
}

onMounted(() => {
  const todoKeys = Object.keys(todos.value).filter(
    (key) => todos.value[key].length > 0 || typeof todos.value[key] === "string"
  );
  const letters = ["A", "B", "C", "D", "E", "F"];
  todoTopics.value = [
    ...new Set(todoKeys.join("").toUpperCase().split("")),
  ].filter((letter) => letters.includes(letter));
});
</script>

<style scoped>
.menu-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 30px;
}

.menuItem {
  border: none;
  padding: 2px 15px 2px 15px;
  border-radius: 10px;
  background-color: #131126;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.button:disabled {
  opacity: 0.5;
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

.button {
  margin-top: 50px;
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

@media only screen and (max-width: 1024px) {
  .menu-container {
    display: block;
  }

  .menuItem {
    margin-bottom: 1em;
  }
}
</style>

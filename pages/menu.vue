<template>
  <div class="slide">
    <HeaderComp />
    <h1>Womit möchtest Du starten?</h1>
    <div class="menu-container">
      <div
        v-for="menuItem in menuItems"
        :key="menuItem.letter"
        class="menuItem"
        :style="{ backgroundColor: buttonColor(menuItem.letter) }"
      >
        <p class="menu-h1">{{ menuItem.title }}</p>
        <p class="menu-p">
          {{ menuItem.description }}
        </p>
        <button @click="navigate(menuItem.letter)" class="menu-button">
          {{ getButtonLabel(menuItem.letter) }}
          <i class="fa fa-long-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="button-container">
      <button @click="Submit" class="button">Bearbeitung abschließen</button>
      <button @click="Restart" class="button-white">Neu Beginnen</button>
    </div>
  </div>
</template>

<script setup>
const index = useIndex();
const order = useOrder();
const todos = useTodos();
const data = useData();
const progress = useProgress();
const categories = useCategories();

const menuItems = [
  {
    letter: "A",
    title: "Dein Körper",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt.",
  },
  {
    letter: "B",
    title: "Deine Verabschiedung",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt.",
  },
  {
    letter: "C",
    title: "Dein Daten",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt.",
  },
  {
    letter: "D",
    title: "Deine Dinge",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt.",
  },
  {
    letter: "E",
    title: "Deine Gedenken",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt.",
  },
  {
    letter: "F",
    title: "Deine Geheimnisse",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt.",
  },
];

function navigate(letter) {
  letter = letter + "1";
  index.value = order.value.indexOf(letter);
  navigateTo(`/${letter}`);
}

function Submit() {
  navigateTo("/submit");
}
function Restart() {
  index.value = 0;
  data.value = {};
  todos.value = {};
  navigateTo("/");
}

const getButtonLabel = (letter) => {
  if (isCategoryComplete(letter)) {
    return "Jetzt konfiguieren";
  }
  return "Bearbeiten";
};

const isCategoryComplete = (letter) => {
  if (categories.value) {
    console.log();
    return !categories.value[letter].complete;
  }
  return 'none'
};

const buttonColor = computed(() => {
  return (buttonId) => {
    if (categories.value && categories.value[buttonId].complete == true) {
      return "#5F81A4";
    } else {
      return "white";
    }
  };
});
</script>

<style scoped>
.menu-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 33px;
  margin: 0 0 28px 0;
}

.menuItem {
  border: solid 1px black;
  padding: 20px 15px 20px 15px;
  border-radius: 10px;
}

.menu-h1 {
  font-size: 22px;
  padding-bottom: 10px;
}

.menu-p {
  font-size: 15px;
  padding-bottom: 20px;
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

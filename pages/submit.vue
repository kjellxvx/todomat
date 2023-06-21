<template>
  <div class="slide">
    <HeaderComp />
    <div class="textbox">
      <h1>Gratulation!</h1>
      <p>
        Du hast deinen Abschied sehr gut vorbereitet. Nun kannst Du die offenen
        To-do‘s anschauen und erledigen, wenn Du Raum und Gelegenheit hast. Mit
        welcher Kategorie möchtest Du beginnen?
      </p>
      <p>
        Alle anderen offenen To-Do‘s und deine beantworteten Fragen kannst Du
        jederzeit auf todomat.org einsehen und ggf. ergänzen oder überarbeiten.
      </p>
    </div>
    <div class="menu-container">
      <div
        v-for="menuItem in menuItems"
        :key="menuItem.letter"
        class="menuItem"
      >
        <p class="menu-h1">{{ menuItem.title }}</p>
        <button
          :disabled="isTodoTopicDisabled(menuItem.letter)"
          @click="viewTodos(menuItem.letter)"
          class="menu-button"
        >
          {{ getButtonLabel(menuItem.letter) }}
          <i class="fa fa-long-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="button-container">
      <button @click="Print" class="button">Auschecken und Ausdrucken</button>
    </div>
  </div>
</template>
<script setup>
const todos = useTodos();
const todoTopics = ref([]);

const menuItems = [
  { letter: "A", title: "Dein Körper" },
  { letter: "B", title: "Deine Verabschiedung" },
  { letter: "C", title: "Dein Daten" },
  { letter: "D", title: "Deine Dinge" },
  { letter: "E", title: "Deine Gedenken" },
  { letter: "F", title: "Deine Geheimnisse" },
];

const isTodoTopicDisabled = (letter) => {
  return !todoTopics.value.includes(letter);
};

const getButtonLabel = (letter) => {
  if (isTodoTopicDisabled(letter)) {
    return "keine To-Do’s vorhanden";
  }
  return "To-Do’s anschauen";
};

function viewTodos(route) {
  navigateTo(`todos/${route}`);
}

async function Print() {
  navigateTo("/print");
}

onMounted(() => {
  const result = Object.values(todos.value).flat();
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
  border-style: solid;
  margin-right: 20px;
  padding: 30px 20px 20px 20px;
  border-radius: 10px;
}

.menu-h1 {
  font-size: 22px;
  padding-bottom: 10px;
}

.menu-p {
  font-size: 15px;
  padding-bottom: 30px;
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

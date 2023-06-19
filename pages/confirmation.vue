<template>
  <div class="slide">
    <HeaderComp />
    <h1>Prima!</h1>
    <h2>
      Du hast nun etwa {{ percent }}% der Fragen des Todomaten bearbeitet. Wie möchtest du weitermachen?
    </h2>
    <div class="checkform">
      <label class="form-control" for="option1">
        <div class="radio-label-left">
          <input
            type="radio"
            id="option1"
            v-model="selection"
            value="option1"
          />
        </div>
        <div class="radio-label-right">
          <p>Ich möchte meine Konfiguration für den Moment beenden und vielleicht später im Internet fortsetzen</p>
        </div>
      </label>
      <label class="form-control" for="option2">
        <div class="radio-label-left">
          <input
            type="radio"
            id="option2"
            v-model="selection"
            value="option2"
          />
        </div>
        <div class="radio-label-right">
          <p>Ich möchte jetzt noch weitere Kategorien bearbeiten</p>
        </div>
      </label>
    </div>
  </div>
  <div class="button-container">
    <button @click="Navigate" class="button">Bestätigen</button>
  </div>
</template>

<script setup>
import HeaderComp from "../components/HeaderComp";

const percent = ref();
const progress = useProgress();
const selection = ref(null);

const totalProgress = progress.value.reduce((sum, value) => sum + value, 0);
percent.value = ((100 / 6) * totalProgress).toFixed(0);

function Navigate() {
  if (selection.value === "option1") {
    navigateTo("/submit");
  } else if (selection.value === "option2") {
    navigateTo("/menu");
  }
}
</script>

<style scoped></style>

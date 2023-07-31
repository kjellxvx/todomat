<template>
  <div class="slide">
    <HeaderComp />
    <h1>Prima!</h1>

    <h2 v-if="percent != 100" class="progress-text">
      Du hast schon {{ percent }}% der Fragen beantwortet!
    </h2>
    <h2 v-else class="progress-text">
      Du hast alle Fragen vollständig beantwortet
    </h2>

    <div class="progress-bar-container">
      <div class="progress-bar-inactive">
        <div
          class="progress-bar-item"
          v-for="el in [...progress, 1]"
          :key="el"
        ></div>
      </div>
      <div class="progress-bar-active" :style="{ width: adjPercent + '%' }">
        <div
          class="progress-bar-item"
          v-for="el in [...progressActive, 1]"
          :key="el"
        ></div>
      </div>
    </div>

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
        <div v-if="percent != 100" class="radio-label-right">
          <p>
            Ich möchte meine Konfiguration für den Moment beenden und vielleicht
            später im Internet fortsetzen
          </p>
        </div>
        <div v-else class="radio-label-right">
          <p>Ich möchte meine Konfiguration jetzt beenden</p>
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
        <div v-if="percent != 100" class="radio-label-right">
          <p>Ich möchte jetzt noch weitere Kategorien bearbeiten</p>
        </div>
        <div v-else class="radio-label-right">
          <p>Ich möchte meine Auswahl noch überbearbeiten</p>
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

const local = useLocal();
const percent = ref();
const progress = useProgress();
const progressActive = computed(() => {
  return progress.value.filter((el) => el === 1);
});

const adjPercent = computed(() => {
  const adjustedValue = Number(percent.value) + 3.35;
  return adjustedValue > 100 ? 100 : adjustedValue;
});

const selection = ref(null);
// console.log(progress.value);

const totalProgress = progress.value.reduce((sum, value) => sum + value, 0);
percent.value = ((100 / 6) * totalProgress).toFixed(0);

function Navigate() {
  if (selection.value === "option1") {
    if (local.value == true) {
      navigateTo("/offboarding");
    } else {
      navigateTo("/offboardingweb");
    }
  } else if (selection.value === "option2") {
    navigateTo("/menu");
  }
}
</script>

<style scoped>
.progress-bar-container {
  position: relative;
  background-color: rgba(197, 197, 197, 0.7);
  width: 100%;
  height: 38px;
  border-radius: 36px;
  overflow: hidden; /* Ensure the progress bars stay within the container */
  margin-bottom: 40px;
}

.progress-bar-inactive {
  display: flex;
  justify-content: space-between;
  position: absolute;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.progress-bar-active {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  border-radius: 36px;
  background-color: #131126;
  top: 0;
  left: 0;
  height: 100%;
}

.progress-bar-item {
  width: 13.4px;
  height: 13.4px;
  border-radius: 100%;
  background-color: #e8e8e8;
  margin: 13.4px;
}

/* Style for the active progress */
.progress-bar-active .progress-bar-item {
  background-color: white; /* Use your desired active color here */
}

.progress-text {
  font-family: "IBMPlexSans-Regular", sans-serif;
}

@media only screen and (max-width: 1020px) {
  .progress-bar-item {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #e8e8e8;
    margin: 10px;
  }
}
</style>

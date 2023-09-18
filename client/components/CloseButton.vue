<template>
  <div class="close-button-container">
    <div class="close-button" @click="Close">
      <img src="../assets/svg/close-button.svg" alt="Close Button"/>
    </div>
  </div>
  <div v-if="abort" class="popup-container">
    <div class="popup">
      <p class="popup-headline">Achtung</p>
      <p class="popup-text">
        Wenn du abbrichst, gehen alle deine Eingaben verloren und der Todomat
        startet mit einer neuen Konfiguration.
      </p>
      <div class="button-container">
        <button @click="Back" class="popup-button">Zurück</button>
        <button @click="navigate('restart')" class="popup-button-white">
          Ja, neu starten
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const local = useLocal();
const abort = ref(false);

function Close() {
  abort.value = true;
}

function Back() {
  abort.value = false;
}

function navigate(path) {
  if (path === "restart") {
    if (local.value == true) {
      navigateTo("/?local=true");
    } else {
      navigateTo("/");
    }
  }
}
</script>

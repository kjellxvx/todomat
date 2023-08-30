<template>
  <div class="slide">
    <HeaderComp />
    <div class="textbox">
      <div></div>
      <h1>So nutzt du den Todomaten</h1>
      <p>
        Im Todomat kannst du Entscheidungen in den Kategorien Körper,
        Verabschiedung, Gedenken, Dinge, Daten und Geheimnisse hinterlegen.
        Dabei vermischen sich aktuelle Wahlmöglichkeiten und Optionen, die erst
        zukünftig zur Verfügung stehen.
      </p>
      <p>
        <span
          class="link"
          @click="
            Info(
              `<div class='popup-headline'>Erklärung</div><p class='popup-text'>Das sieht dann so aus. Bleib neugierig, es lohnt sich!</p>`
            )
          "
        >
          Unterstrichene Begriffe</span
        >
        <span> werden durch Klicken erläutert.</span>
      </p>
      <p>
        Am Ende druckt dir der Todomat auf Basis deiner Antworten To-dos aus, um
        vorbereiteter zu sterben. Du kannst deine Konfiguration jederzeit
        beenden und später im Internet unter todomat.org fortsetzen oder ändern.
      </p>
      <p>
        Viel Spaß bei deiner persönlichen Hinterlassenschafts-Konfiguration!
      </p>
    </div>
    <div class="button-container">
      <button @click="navigate('menu')" class="button">Abfrage starten</button>
      <button @click="navigate('start')" class="button-white">Zurück</button>
    </div>
  </div>
</template>

<script setup>
import { useUserToken } from "../composables/useUtils";

const index = useIndex();
const todos = useTodos();
const data = useData();
const userToken = useUserToken();
const popup = usePopup();

function navigate(path) {
  if (path === "restart") {
    index.value = 0;
    data.value = {};
    todos.value = {};
    userToken.value = false;
  }
  navigateTo(`/${path}`);
}

function Info(htmlContent) {
  popup.value.isOpen = true;
  popup.value.content = htmlContent;
}
</script>

<style scoped>
.textbox p {
  width: 97%;
}
</style>
-

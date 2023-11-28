<template>
  <div class="slide">
    <HeaderComp />
    <CloseButton />
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
        Am Ende empfiehlt dir der Todomat auf Basis deiner Antworten in allen
        bearbeiteten Kategorien To-dos, um vorbereiteter zu sterben.
      </p>

      <p v-if="local">
        Du kannst deine Konfiguration jederzeit beenden und später im Internet
        unter todomat.org fortsetzen oder ändern.
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
import HeaderComp from "../components/HeaderComp";
import CloseButton from "../components/CloseButton";

const local = useLocal();
const popup = usePopup();

const navigate = (path) => {
  navigateTo(`/${path}`);
};

function Info(htmlContent) {
  popup.value.isOpen = true;
  popup.value.content = htmlContent;
}
</script>

<style scoped>
.textbox p {
  width: 97%;
}

@media only screen and (max-width: 1020px) {
  .button-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
-

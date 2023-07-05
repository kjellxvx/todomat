<template>
  <div class="slide">
    <HeaderComp
      />
    <div class="textbox">
      <div></div>
      <h1>
        Guten Tag. <br />
        Du wirst sterben.
      </h1>
      <p>
        Im Todomat kannst du Entscheidungen in den Kategorien Körper,
        Verabschiedung, Gedenken, Dinge, Daten und Geheimnisse hinterlegen.
        Dabei vermischen sich aktuelle Wahlmöglichkeiten und Optionen, die erst
        zukünftig zur Verfügung stehen.
      </p>
      <p>
        Am Ende druckt dir der Todomat auf Basis deiner Antworten To-do‘s aus,
        um vorbereiteter zu sterben. Du kannst deine Konfiguration jederzeit
        beenden und später im Internet unter todomat.org fortsetzen oder ändern.
      </p>
      <p>
        Viel Spaß bei deiner persönlichen Hinterlassenschafts-Konfiguration!
      </p>
    </div>
    <div class="button-container">
      <button @click="Restart" class="button">Abfrage starten</button>
      <button @click="Zurück" class="button-white">Zurück</button>
    </div>
  </div>
</template>

<script setup>
const index = useIndex();
const todos = useTodos();
const data = useData();

function Restart() {
  index.value = 0;
  data.value = {};
  todos.value = {};
  navigateTo("/menu");
}
function Zurück() {
  navigateTo("/start");
}
</script>

<style scoped>

.textbox p{
  width: 97%;
}
</style>
-

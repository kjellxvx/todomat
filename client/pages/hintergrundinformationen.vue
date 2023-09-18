<template>
  <NuxtLayout name="web">
    <div class="slide">
      <HeaderCompWeb />
      <div class="textbox">
        <h1 lang="de" class="h1-web">Hintergrundinformationen</h1>
        <h2 class="h2-web">Was ist der Todomat?</h2>
        <p>
          Der Name Todomat setzt sich aus den Begriffen Tod, To-do und Automat
          zusammen. Der Todomat ist der erste Hinterlassenschafts-Konfigurator
          der Welt. Diese Website ist der digitale Zwilling des richtigen
          Automaten, welcher als Installation im Museum für Sepulkralkultur in
          Kassel steht und dort frei zugänglich benutzt werden kann:
          <a href="https://www.sepulkralmuseum.de" target="_blank"
            >www.sepulkralmuseum.de.</a
          >
        </p>
        <p>
          Der Todomat wurde als ein Artefakt aus einer Zukunft entworfen, in der
          wir unseren Tod selbstbestimmter und nachhaltiger gestalten. In dieser
          Zukunft ist der Tod weniger bedrohlich. Vielmehr ermutigt er uns so zu
          leben, dass wir am Ende in Frieden gehen können. Der Todomat gibt uns
          dafür nützliche To-dos mit auf den Weg.
        </p>
        <p>
          Die Reflexion über den Tod und seine Präsenz im Alltag sind in der
          Zukunft selbstverständlicher geworden. Dafür gibt es an vielen Orten
          und im Internet Automaten bzw. Konfiguratoren, mit denen alle Menschen
          Wünsche und Entscheidungen rund um ihren Tod hinterlegen und jederzeit
          aktualisieren können.
        </p>
        <h2 class="h2-web">
          Was gibt es bei der Benutzung des Todomaten zu beachten?
        </h2>
        <p>
          Der Todomat stellt bis zu 20 Entscheidungsfragen in den Kategorien
          Abschied und Gedenken sowie Umgang mit dem Körper, mit Dingen, Daten
          und Geheimnissen. Dabei vermischen sich gegenwärtig realisierbare
          Möglichkeiten und fiktive (erfundene) Optionen. Diese sind als
          Einladung zu verstehen, aktuelle Gepflogenheiten im Bestattungswesen
          und im Umgang mit Hinterlassenschaften zu hinterfragen.
        </p>
        <p>
          Nicht alle derzeit in Deutschland legalen Möglichkeiten sind
          vollständig aufgelistet. Die Traditionen von kulturellen oder
          religiösen Minderheiten sind unterrepräsentiert.
        </p>
        <p>
          Schließlich möchte das Xtopien-Kollektiv betonen, dass es ein Privileg
          ist, so über den eigenen Tod nachdenken zu können. Viele Menschen
          sterben ohne Bestattung und es fehlt der Raum für Trauer und
          Erinnerung.
        </p>
        <h2 class="h2-web">Wo kommt der Todomat her?</h2>
        <p>
          Der Todomat wurde im transformativen Forschungsprojekt „Urbane Xtopien
          – Freiräume der Zukunft“ entwickelt. Dieses führte von 2020 bis 2023
          unterschiedliche Interventionen durch, die Menschen dazu einluden,
          neue eigene Zukunftsvisionen auszuformulieren und diese kritisch zu
          hinterfragen.
        </p>
        <p>
          Erfahre mehr über das Projekt auf
          <a href="https://www.xtopien.org" target="_blank">www.xtopien.org.</a>
        </p>
        <p>
          Bei der Umsetzung des Todomaten waren außer dem Xtopien-Team auch
          aktuelle und ehemalige Studierende der
          <a href="https://https://kisd.de/ " target="_blank"
            >Köln International School of Design</a
          >
          beteiligt, die mit ihrem interdiziplinären Designverständnis die
          Umsetzung einer so einzigartigen Intervention erst möglich gemacht
          haben.
        </p>
        <p>
          Maximilian Beck:
          <a href="https://studiomaximilianbeck.com/" target="_blank"
            >www.studiomaximilianbeck.com</a
          >
          <br />
          Kjell Wisthoff:
          <a href="https://kjellwistoff.de" target="_blank"
            >www.kjellwistoff.de</a
          >
          <br />
          Paula Ahn:
          <a href=" https://paula-electra.com/" target="_blank"
            >www.paula-electra.com</a
          >
          <br />
          Valentin Natschke
        </p>
      </div>
    </div>

    <div class="button-container">
      <button @click="navigate('')" class="button-white">Zurück</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
import HeaderCompWeb from "../components/HeaderCompWeb";

const navigate = (path) => {
  navigateTo(`/${path}`);
};
onMounted(() => {});
</script>

<style scoped>
.textbox {
  margin-bottom: 25px;
}

.button-container {
  margin-bottom: 50px;
}

a {
  color: black;
  cursor: pointer;
}

@media only screen and (max-width: 1020px) {
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
}
</style>

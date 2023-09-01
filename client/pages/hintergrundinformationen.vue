<template>
  <NuxtLayout name="web">
    <div class="slide">
      <HeaderCompWeb />
      <div class="textbox">
        <h1>Hintergrundinformationen</h1>
        <h2>Was ist der Todomat?</h2>
        <p>
          Der Name Todomat setzt sich aus den Begriffen Tod, To-do und Automat
          zusammen. Der Todomat ist der erste Hinterlassenschafts-Konfigurator
          der Welt. Diese Website ist der digitale Zwilling des richtigen
          Automaten, welcher als Installation bei unseren Partnern im Museum für
          Sepulkralkultur in Kassel steht und dort besucht werden kann
          <a href="https://www.sepulkralmuseum.de" target="_blank" >www.sepulkralmuseum.de.</a>
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
        <h2>Was gibt es bei der Benutzung des Todomaten zu beachten?</h2>
      </div>
    </div>

    <div class="button-container">
      <button @click="navigate('/')" class="button-white">Zurück</button>
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

h2 {
  font-size: 48.2px;
  font-family: "IBMPlexSans-Regular", sans-serif;
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

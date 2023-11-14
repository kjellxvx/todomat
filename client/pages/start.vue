<template>
  <div class="slide">
    <HeaderComp />
    <CloseButton />
    <div class="textbox">
      <div></div>
      <h1>
        Guten Tag. <br />
        Du wirst sterben.
      </h1>
      <p lang="de">
        Das könnte schon morgen passieren. Heute kannst du dir darüber Gedanken
        machen und wichtige Entscheidungen für dich und die Lebenden
        hinterlegen.
      </p>
      <p lang="de" class="p-bold">
        Es gibt auch einige To-dos zu erledigen. <br />
        Der Todomat hilft dir dabei!
      </p>
      <!-- <p>
        Der Todomat ist der erste Hinterlassenschafts-Konfigurator der Welt. <br> Er
        wurde entwickelt, um deinen Abschied selbstbestimmter und <br> nachhaltiger
        zu gestalten. <a @click="Info('<h1>Headline</h1><p>Text</p>')" class="popup-link">Mehr Info’s zum Todomat.</a>
      </p> -->
      <p lang="de">
        Der Todomat ist der erste Hinterlassenschafts-Konfigurator der Welt. Er
        wurde entwickelt, um deinen Abschied selbstbestimmter und nachhaltiger
        zu gestalten.
        <a @click="navigate('about')" class="link"
          >Mehr zu den Benefits des Todomaten.</a
        >
      </p>
    </div>
    <div class="button-container">
      <!-- <button @click="Weiter" class="button">Weiter</button> -->
      <!-- <button v-if="local" @click="navigate('onboarding')" class="button">
        Weiter
      </button> -->
      <button @click="navigate('onboarding')" class="button">Weiter</button>
    </div>
  </div>
</template>

<script setup>
import HeaderComp from "../components/HeaderComp";
import CloseButton from "../components/CloseButton";

const local = useLocal();

const navigate = (path) => {
  navigateTo(`/${path}`);
};
</script>

<style scoped>
.button-white svg {
  padding-left: 25px;
}

.textbox p {
}

.button-container {
  margin-top: 30px;
}

@media only screen and (max-width: 1020px) {
  .button-container {
    justify-content: flex-start;
  }

  .button-white {
    margin-right: 0px;
  }

  p {
    hyphens: auto;
    width: 90%;
  }

  .p-bold {
    width: 76%;
  }
}
</style>
-

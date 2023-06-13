<template>
  <div class="slide">
    <div class="header-row">
      <p class="brand">Todomat.</p>
      <p class="slogan">Vorbereitet Sterben.</p>
    </div>
    <div class="header-row">
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
    </div>
    <div class="textbox">
      <div></div>
      <h1>
        Guten Tag. <br />
        Du wirst sterben.
      </h1>
      <p>
        Das könnte schon morgen passieren. Heute kannst du dir darüber Gedanken
        machen und wichtige Entscheidungen für dich und die Lebenden
        hinterlegen.
      </p>
      <p class="p-bold">
        Es gibt auch einige ToDos zu erledigen. <br />
        Der Todomat hilft Dir dabei!
      </p>
      <!-- <p>
        Der Todomat ist der erste Hinterlassenschafts-Konfigurator der Welt. <br> Er
        wurde entwickelt, um deinen Abschied selbstbestimmter und <br> nachhaltiger
        zu gestalten. <a @click="Info('<h1>Headline</h1><p>Text</p>')" class="popup-link">Mehr Info’s zum Todomat.</a>
      </p> -->
      <p>
        Der Todomat ist der erste Hinterlassenschafts-Konfigurator der Welt.
        <br />
        Er wurde entwickelt, um deinen Abschied selbstbestimmter und <br />
        nachhaltiger zu gestalten.
        <a @click="About" class="popup-link">Mehr Info’s zum Todomat.</a>
      </p>
    </div>
    <div class="button-container">
      <button @click="Weiter" class="button">Weiter</button>
      <button @click="Return" class="button-white">
        Code Eingeben
        <svg
          width="30"
          height="12"
          viewBox="0 0 30 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3214 6.40026C29.6093 6.11233 29.6093 5.64549 29.3214 5.35755L24.6291 0.665335C24.3412 0.377397 23.8744 0.377397 23.5864 0.665335C23.2985 0.953272 23.2985 1.42011 23.5864 1.70805L27.7573 5.87891L23.5864 10.0498C23.2985 10.3377 23.2985 10.8045 23.5864 11.0925C23.8744 11.3804 24.3412 11.3804 24.6291 11.0925L29.3214 6.40026ZM0.481384 6.61622H28.8V5.1416H0.481384V6.61622Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
function Weiter() {
  navigateTo("/onboarding");
}
function Return() {
  navigateTo("/return");
}
// function Info(htmlContent) {
//   popup.value.isOpen = true;
//   popup.value.content = htmlContent;
// }
function About() {
  navigateTo("/about");
}
</script>

<style scoped>
.button-container {
  display: flex;
  flex-direction: row;
  margin: 0;
}

.button-white svg{
padding-left: 25px;
}

.textbox p{
  width: 890px;
}
</style>
-

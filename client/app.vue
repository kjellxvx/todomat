<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Todomat - Vorbereitet Sterben",
  meta: [
    {
      name: "description",
      content:
        "Der Todomat ist der weltweit erste Hinterlassenschafts-Konfigurator, entworfen für selbstbestimmte und nachhaltige Bestattungsplanung.",
    },
    {
      name: "keywords",
      content:
        "Todomat, Bestattungsplanung, Hinterlassenschafts-Konfigurator, Tod, Reflexion über den Tod, Museum für Sepulkralkultur",
    },
    { name: "author", content: "Urbane Xtopien – Freiräume der Zukunft" },
    { name: "robots", content: "index, follow" },
    { property: "og:image", content: "todomat.org/Todomat-1200x630.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
  ],
});
</script>

<style>
@font-face {
  font-family: "IBMPlexSans-Regular";
  src: url("@/assets/fonts/IBMPlexSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "IBMPlexSans-Medium";
  src: url("@/assets/fonts/IBMPlexSans-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "IBMPlexSans-Bold";
  src: url("@/assets/fonts/IBMPlexSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "IBMPlexSans-MediumItalic";
  src: url("@/assets/fonts/IBMPlexSans-MediumItalic.ttf") format("truetype");
}

@font-face {
  font-family: "IBMPlexSans-SemiBold";
  src: url("@/assets/fonts/IBMPlexSans-SemiBold.ttf") format("truetype");
}

:root {
  --primary-color: #363ad1;
  --secondary-color: #2b2b2b;
  --disabled-color: #b5b5b5;
  --form-control-color: var(--primary-color: );
}

.first-circle {
  position: absolute;
  top: 81%;
  left: 76%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background: radial-gradient(closest-side, #5f81a4, #4ae074 65%);
  /* filter: blur(206.63px); */
  filter: blur(20vw);
}

.second-circle {
  position: absolute;
  top: 77%;
  left: 64%;
  transform: translate(-50%, -50%) rotate(166.96deg);
  width: 48%;
  height: 48%;
  border-radius: 50%;
  background: radial-gradient(
    217.68% 217.68% at 27.97% 49.05%,
    #5ae9fd 0%,
    rgba(90, 233, 253, 0) 100%
  );
  border: 45.0761px solid #00e29a;
  /* border-radius: 383.626px; */
  border-radius: 49%;
  filter: blur(107.415px);
  filter: blur(10vw);
}

.third-circle {
  position: absolute;
  top: 54%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 71.3%;
  height: 68.9%;
  border-radius: 50%;
  background: radial-gradient(
    158.99% 50% at 50% 50%,
    #5f81a4 0%,
    rgba(99, 73, 255, 0.37) 100%
  );
  mix-blend-mode: screen;
  filter: blur(9vw);
  animation-name: rotate;
  animation-duration: 20s;
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-iteration-count: infinite;
}

.forth-circle {
  position: absolute;
  top: 48%;
  left: 87%;
  transform: translate(-50%, -50%) rotate(-324deg) scaleX(-1);
  width: 51.2%;
  height: 51.2%;
  border-radius: 50%;
  background-color: white;
  background: conic-gradient(
    from -180deg at 50% 50%,
    #ffe072 0deg,
    rgba(255, 216, 75, 0) 360deg
  );
  mix-blend-mode: normal;
  filter: blur(12vw);
}

.fifth-circle {
  position: absolute;
  top: 58%;
  left: 86%;
  transform: translate(-50%, -50%);
  width: 76.1%;
  height: 76.1%;
  border-radius: 50%;
  background-color: #ff8a00;
  mix-blend-mode: lighten;
  filter: blur(13vw);
  animation-name: move;
  animation-duration: 24s;
  animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}

h1 {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-size: 65px;
  text-align: left;
  margin: 0px;
  padding-bottom: 20px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

h2 {
  font-family: "IBMPlexSans-Medium", sans-serif;
  max-width: 80%;
  font-size: 26px;
  text-align: left;
  margin: 0px;
  padding-bottom: 40px;
}

p {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 26px;
  text-align: left;
  margin: 0px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

span{
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

a{
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  cursor:help;
}

.button {
  /* height: 1.8em; */
  height: 39px;
  background-color: var(--primary-color);
  color: white;
  border: 0;
  /* border-radius: 1em; */
  border-radius: 21.1px;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 21.1px;
  /* padding: 0.2em 2em 0.2em 2em; */
  padding: 5px 50px 5px 50px;
  margin-right: 10px;
  cursor: pointer;
}

.button-white {
  /* height: 1.8em; */
  height: 39px;
  background-color: white;
  color: black;
  border: solid black 1.2px;
  /* border-radius: 1em; */
  border-radius: 21.1px;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 21.1px;
  /* padding: 0.2em 1.3em 0.2em 1.3em; */
  padding: 5px 40px 5px 40px;
  cursor: pointer;
}

.button-close {
  background-color: white;
  border-style: none;
  font-size: 35px;
  height: 39.39px;
  cursor: pointer;
}

.popup-button {
  height: auto;
  background-color: var(--primary-color);
  color: white;
  border: 0;
  border-radius: 2em;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 15.89px;
  /* padding: 0.3em 1.3em 0.3em 1.3em;*/
  padding: 4px 15px 4px 15px;
  margin-right: 10px;
  cursor: pointer;
}

.popup-button-white {
  height: auto;
  background-color: white;
  color: black;
  border: solid black 1.2px;
  border-radius: 2em;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 15.89px;
  padding: 4px 15px 4px 15px;
  /* padding: 0.3em 1.3em 0.3em 1.3em; */
  cursor: pointer;
}

.button-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.button-container button {
  margin-right: 20px;
}

input[type="text"] {
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  font-family: "IBMPlexSans-Italic", sans-serif;
  color: black;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid black;
  margin-left: 10px;
}

input[type="text"]::placeholder {
  color: var(--disabled-color);
  cursor: not-allowed;
}

input[type="text"]:disabled {
  color: var(--disabled-color);
  background: white;
  cursor: not-allowed;
}

input.codeInput {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 21.1px;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 10px;
  margin-left: 0;
}

.codeInput::placeholder {
  color: var(--disabled-color);
  cursor: not-allowed;
}

.codeInput:disabled {
  color: var(--disabled-color);
  border-color: var(--disabled-color);
  background: white;
  cursor: not-allowed;
}

.keyboard-container {
  z-index: 2;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: #ececec;
}

.keyboard {
  width: 85%;
  height: auto;
  font-size: 10px;
}

.hg-theme-default {
  font-size: 2em;
}

.hg-theme-default .hg-button {
  height: 140px;
}

form {
  display: grid;
  place-content: center;
}

.form-control {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 20px;
  text-align: left;
  margin: 0px;
  display: flex;
  grid-template-columns: 1em auto;
  align-items: center;
  gap: 0;
  display: flex;
}

.checkform {
  max-width: 810px;
  margin-bottom: 30px;
}

.radio-label-left {
  display: flex;
}

.radio-label-left > label {
  padding-left: 20px;
  width: 100%;
}

.form-control + .form-control {
  margin-top: 1em;
  display: flex;
  width: 100%;
}

.radio-label-right {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

.form-control--disabled {
  color: #959495;
  cursor: not-allowed;
}
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--form-background);
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.08em solid currentColor;
  border-radius: 50%;
  display: grid;
  place-content: center;
  align-self: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--primary-color);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--form-background);
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.08em solid currentColor;
  border-radius: 50%;
  display: grid;
  place-content: center;
  align-self: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--primary-color);
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

.link {
  color: var(--secondary-color);
  font-family: "IBMPlexSans-Bold", sans-serif;
  text-decoration: underline;
  cursor: help;
}

.popup-link {
  color: var(--secondary-color);
  font-family: "IBMPlexSans-Medium", sans-serif;
  font-size: 20px;
  text-decoration: underline;
  margin-left: 5px;
  white-space: nowrap;
}

.popup-container {
  position: fixed;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
}

.popup-container-noblur {
  position: fixed;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* z-index: 999; */
}

.popup {
  width: 320px;
  border-style: solid;
  border-radius: 10px;
  background-color: white;
  z-index: 1000;
  margin: 38px;
  padding: 19px;
}

.popup-headline {
  font-family: "IBMPlexSans", sans-serif;
  font-size: 22px;
  text-align: left;
  margin: 0px;
  padding: 10px 0 10px 0;
  border: solid;
  border-width: 0 0 1px 0;
  border-color: black;
}

.popup-text {
  font-family: "IBMPlexSans", sans-serif;
  font-size: 15px;
  text-align: left;
  margin: 0px;
  padding: 20px 0 15px 0;
}

.popup-close-button {
  position: fixed;
  right: 60px;
  background-color: white;
  border-style: none;
  font-size: 35px;
  height: 39.39px;
  cursor: pointer;
}

.close-button-container {
  position: relative;
  display: flex;
  justify-content: flex-end;
  top: -8px;
}

.close-button {
  position: absolute;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin: 3px;
}

.menu-button {
  height: 28px;
  background-color: white;
  border: solid black 1px;
  color: black;
  border-radius: 21.1px;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 13px;
  padding: 0 15px 0 38px;
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
}

.menu-button i {
  margin: 2px 0px 0 30px;
}

.menu-button[disabled] {
  cursor: default;
}

.loading-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
}

.loading-spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid var(--primary-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

.timeout-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  backdrop-filter: blur(5px);
}

.multi-choice {
  font-family: "IBMPlexSans-Regular", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 1020px) {
  .slide {
    position: relative;
  }

  .button {
    /* font-size: 5vw; */
    font-size: 21.1px;
    margin-bottom: 0.5em;
  }

  .button-white {
    font-size: 21.1px;
    /* font-size: 5vw; */
  }

  .button-container {
    white-space: nowrap;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;
  }

  .radio-label-right {
    display: block;
  }

  input[type="text"] {
    margin: 0.5em 0 0 0;
  }
  .popup-link {
    margin-left: 10px;
  }

  .checkform {
    padding-bottom: 1em;
  }

  input.codeInput {
    margin-bottom: 30px;
  }

  .close-button {
    position: relative;
  }

  .close-button-container {
    position: absolute;
    right: 0px;
    top: 50px;
  }
}

/* The animation code */
/* @keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} */

/* @keyframes move {
  0% {
    left: 75%;
    top: 50%;
  }
  25% {
    left: 86%;
    top: 58%;
  }
  50% {
    left: 96%;
    top: 65%;
  }
  75% {
    left: 86%;
    top: 58%;
  }
  100% {
    left: 75%;
    top: 50%;
  }
} */
</style>

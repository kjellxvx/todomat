<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script></script>

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

:root {
  --primary-color: #363ad1;
  --secondary-color: #2b2b2b;
  --disabled-color: #b5b5b5;
  --form-control-color: var(--primary-color: );
}

html body {
  width: 100vw;
  height: 100svh;

  /* width: 1024px;
  height: 768px;
  border: black 1px solid; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
}

#__nuxt {
  max-width: 1024px;
  width: 100%;
  height: 100svh;
  margin: 0;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #131126;
  z-index: -9999;
  overflow: hidden;
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
}

.button {
  height: 1.8em;
  background-color: var(--primary-color);
  color: white;
  border: 0;
  border-radius: 1em;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 21.1px;
  padding: 0.2em 2em 0.2em 2em;
  margin-right: 10px;
  cursor: pointer;
}

.button-white {
  height: 1.8em;
  background-color: white;
  color: black;
  border: solid black 1.2px;
  border-radius: 1em;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 21.1px;
  padding: 0.2em 1.3em 0.2em 1.3em;
  cursor: pointer;
}

.button-close {
  background-color: white;
  border-style: none;
  font-size: 35px;
  height: 39.39px;
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
  font-family: "IBMPlexSans-MediumItalic", sans-serif;
  color: black;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid black;
  margin-left: 20px;
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
  bottom: 0vh;
  display: flex;
  justify-content: center;
  background-color: #ececec;
}

.keyboard {
  width: 100%;
  height: auto;
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
  max-width: 800px;
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
  cursor: pointer;
  color: var(--secondary-color);
  font-family: "IBMPlexSans-Bold", sans-serif;
  text-decoration: underline;
}

.popup-link {
  cursor: pointer;
  color: var(--secondary-color);
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-size: 20px;
  text-decoration: underline;
  margin-left: 10px;
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

.popup {
  width: 300px;
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
  padding: 10px 0 20px 0;
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
  right: 50px;
  background-color: white;
  border-style: none;
  font-size: 35px;
  height: 39.39px;
  cursor: pointer;
}

.close-button-container {
  position: relative;
  display: flex;
  justify-content: end;
}

.close-button {
  position: absolute;
  width: 30px;
  height: 30px;
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

@media only screen and (max-width: 1024px) {
  html body {
    overflow: auto;
  }

  .button {
    font-size: 5vw;
    margin-bottom: 0.5em;
  }

  .button-white {
    font-size: 5vw;
  }

  .button-container {
    display: block;
    flex-direction: row;
    width: 100%;
    padding-bottom: 1em;
  }

  .radio-label-right {
    display: block;
  }

  input[type="text"] {
    margin: 0.5em 0 0 0;
  }
  .popup-link {
    margin-left: 0;
  }

  .checkform {
    padding-bottom: 3em;
  }

  input.codeInput {
    margin-bottom: 40px;
  }

  .close-button{
    position:relative;
  }

  .close-button-container{
    margin: 10px 0 10px 0;
  }
}
</style>

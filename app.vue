<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
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
  --primary-color: #5F81A4;
  --secondary-color: #2B2B2B;
  --disabled-color: #B5B5B5;
  --form-control-color: var(--primary-color:);
}

html {
  width: 1024px;
  height: 768px;
  /* width: 100vw;
  height: 100vh; */
}

body {
  margin: 0px;
  border: black;
  border-radius: 1px;
  border: solid;
}

.button {
  height: 39.39px;
  background-color: var(--primary-color);
  border: 0;
  color: white;
  border-radius: 21.1px;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 21.1px;
  padding: 5px 50px 5px 50px;
  margin-right: 10px;
  cursor: pointer;
}

.button-white {
  height: 39.39px;
  background-color: white;
  border-style: solid;
  color: black;
  border-width: 1px;
  border-radius: 21.1px;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 21.1px;
  padding: 5px 30px 5px 30px;
  cursor: pointer;
}

.button-close {
  background-color: white;
  border-style: none;
  font-size: 35px;
  height: 39.39px;
  cursor: pointer;
}

input[type="text"] {
  font-family: "IBMPlexSans-MediumItalic", sans-serif;
  color: black;
  font-size: 20px;
  border-width: 0 0 1px 0;
  border-color: black;
  margin-left: 20px;
}

input[type="text"]::placeholder {
  color: var(--disabled-color);
  cursor: not-allowed;
}

input[type="text"]:disabled {
  color: var(--disabled-color);
  border-width: 0 0 1px 0;
  border-color: black;
  background: white;
  cursor: not-allowed;
}

.codeInput {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 21.1px;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 10px;
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

.checkform{
  max-width: 800px;
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

.radio-label-right{
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

</style>

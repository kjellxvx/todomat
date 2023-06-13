<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div>
    <NuxtLayout>
      <NuxtPage popup />
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

:root {
  --primary-color: #5F81A4;
  /* --secondary-color: #5F81A4; */
  --disabled-color: #959495;
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
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 21.1px;
  border-width: 1px;
  border-radius: 10px;
  padding-left: 10px;
}

input[type="text"]::placeholder {
  color: var(--disabled-color);
  cursor: not-allowed;
}

input[type="text"]:disabled {
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
</style>

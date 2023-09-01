<template>
  <slot />
</template>

<script setup></script>

<style>
/* html body {
  overflow-y: auto;
  justify-content: flex-start;
}

#__nuxt {
  max-width: 1020px;
}

.page-container {
  height: calc(100% - 4.6em);
  width: calc(100% - 6em);
  margin: 2.3em 3em;
  max-height: fit-content;
} */

* {
  box-sizing: border-box;
}

html {
  width: 100vw;
  height: 100vh;
  margin: 0;
}
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.page-container {
  padding: 2.3em 3em;
  /* max-width: calc(1020px - 6em); */
  max-width: 1020px;
  margin: 0 auto 0 auto;
  margin: auto;
  height: fit-content;
}

.slide {
  width: 100%;
}

.button-container {
  padding-bottom: 1px;
}

.h1-web {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-size: 65px;
  text-align: left;
  margin: 0px;
  padding-bottom: 0px;
  border-bottom: solid;
}

.h2-web {
  font-size: 48.2px;
  font-family: "IBMPlexSans-Regular", sans-serif;
  padding: 60px 0 40px 0;
}

@media only screen and (max-width: 1020px) {
  .h1-web {
    width: 240px;
    font-size: 35px;
    hyphens: auto;
  }

  .h2-web {
    font-size: 26px;
    padding: 30px 0 25px 0;
  }
}
</style>

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
  width: 100lvw;
  height: 100lvh;
  margin: 0;
}
body {
  margin: 0;
  width: 100lvw;
  height: 100lvh;
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
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.h2-web {
  font-size: 48.2px;
  font-family: "IBMPlexSans-Regular", sans-serif;
  padding: 60px 0 40px 0;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

@media only screen and (max-width: 1020px) {
  .page-container {
    padding: 1.5em 1.5em;
    max-height: fit-content;
    height: fit-content;
  }

  .h1-web {
    font-size: 35px;
    hyphens: auto;
  }

  .h2-web {
    font-size: 26px;
    padding: 30px 0 25px 0;
  }
}
</style>

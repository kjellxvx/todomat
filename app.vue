<template>
  <div>
    <NuxtLayout>
      <NuxtPage popup />
    </NuxtLayout>
  </div>
</template>

<script></script>

<style>

@font-face {
  font-family: 'IBMPlexSans-Regular';
  src: url('@/assets/fonts/IBMPlexSans-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'IBMPlexSans-Medium';
  src: url('@/assets/fonts/IBMPlexSans-Medium.ttf') format('truetype');
}

@font-face {
  font-family: 'IBMPlexSans-Bold';
  src: url('@/assets/fonts/IBMPlexSans-Bold.ttf') format('truetype');
}

html {
  width: 1024px;
  height: 768px;
  /* width: 100vw;
  height: 100vh; */

}

body{
  margin: 0px;
  border: black;
  border-radius: 1px;
  border: solid;
}

button{
  height: 39.39px;
  background-color: #FF8A00;
  border: 0;
  color: white;
  border-radius: 21.1px;
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 21.1px;
  padding: 5px 30px 5px 30px;
}


</style>

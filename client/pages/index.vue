<template>
  <div v-if="hamMenu === true" class="blur-effect"></div>

  <div class="background">
    <div class="first-circle"></div>
    <div class="second-circle"></div>
    <div class="third-circle"></div>
    <div class="forth-circle"></div>
    <div class="fifth-circle"></div>
  </div>

  <div class="headbar">
    <div v-if="hamMenu === false" @click="hamMenu = true" class="hamburger">
      <img src="../assets/svg/hamburger.svg" alt="" />
    </div>
    <div class="logo">
      <img src="../assets/svg/logo.svg" alt="" />
    </div>
  </div>

  <div v-if="local === false" class="menu">
    <div v-if="hamMenu === true" class="sidebar">
      <div class="sidebar-header">
        <img src="../assets/svg/logo.svg" alt="Todomat Logo" />
        <img
          class="menu-close-button"
          @click="hamMenu = false"
          src="../assets/svg/close-button.svg"
          alt="Close Button"
        />
      </div>
      <div class="sidebar-menu">
        <div class="options">
          <div class="sidebar-menu-left">
            <div class="arrow-item">
              <img src="../assets/svg/arrow.svg" />
            </div>
            <div class="arrow-item">
              <img src="../assets/svg/arrow.svg" />
            </div>
            <div class="arrow-item">
              <img src="../assets/svg/arrow.svg" />
            </div>
          </div>
          <div class="sidebar-menu-right">
            <div @click="navigate('downloads')" class="menu-item">
              <p>Downloadmaterialien</p>
            </div>
            <div
              @click="navigate('hintergrundinformationen')"
              class="menu-item"
            >
              <p>Hintergrundinformationen</p>
            </div>
            <div @click="navigate('datenschutz')" class="menu-item">
              <p>Hinweise zum Datenschutz</p>
            </div>
          </div>
        </div>
        <div class="instagram">
          <a href="https://www.instagram.com/urbanextopien/" target="_blank"
            ><img src="../assets/svg/instagram.svg" alt="Instagram Icon" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="slide">
    <div class="text">
      <p class="h1-index">Du wirst sterben.</p>
      <p class="h2-index">Plane jetzt deinen Abschied.</p>
      <button @click="navigate('start')" class="button">Start</button>
    </div>
  </div>
  
</template>

<script setup>
const route = useRoute();
const local = useLocal();
const loading = useLoading();
const index = useIndex();
const data = useData();
const todos = useTodos();
const complete = useComplete();
const progress = useProgress();
const order = useOrder();
const userToken = useUserToken();
const hamMenu = useHamMenu();

const navigate = (path) => {
  navigateTo(`/${path}`);
};

onMounted(() => {
  complete.value = false;
  todos.value = {};
  data.value = {};
  progress.value = [0, 0, 0, 0, 0, 0];
  index.value = 0;
  userToken.value = false;
  loading.value = false;
  order.value = [
    "menu",
    "A1",
    "A2",
    "menu",
    "B1",
    "menu",
    "C1",
    "C2",
    "C3",
    "menu",
    "D1",
    "D2",
    "D3",
    "D4",
    "menu",
    "E1",
    "E2",
    "E3",
    "E4",
    "menu",
    "F1",
    "F2",
    "F3",
    "menu",
  ];
  if (route.query.local == "true") {
    local.value = true;
  } else {
    local.value = false;
  }
});
</script>

<style scoped>
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

.h1-index {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-size: 100px;
  line-height: 1.1em;
  text-align: center;
  margin: 0 0 10px 0;
  color: white;
  white-space: nowrap;
  /* line-height: 110px; */
  /* font-size: 10vw; */
  /* margin: 30px 0 40px 0; */
}

.h2-index {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 48.19px;
  /* font-size: 5vw; */
  text-align: center;
  margin: 0;
  color: white;
  padding-bottom: 70px;
}

.button {
  font-size: 21.1px;
  /* font-size: 2vw; */
  background-color: white;
  color: black;
  /* padding: 0.2em 3.3em 0.2em 3.3em; */
  padding: 5px 3.3em 5px 3.3em;
}

.slide {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.page-container {
  height: 100vh;
  overflow: hidden;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.headbar {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 5.2em);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 60px 42px 60px 42px;
}
.hamburger {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.logo {
  display: flex;
  justify-content: center;
  filter: invert();
  align-self: center; /* Center this item vertically */
  margin: auto;
  padding-right: 45px;
}
.logo img {
  width: 195px;
}

.sidebar {
  position: fixed;
  height: 100vh;
  background-color: white;
  top: 0;
  left: 0;
  width: 440px;
  display: flex;
  flex-direction: column;
}

.blur-effect {
  position: absolute;
  top: 0;
  left: 440px;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(10px);
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  margin: 25px;
}

.sidebar-menu {
  margin: auto 15px auto 15px;
  display: flex;
  flex-direction: column;
}

.sidebar-menu-left {
  display: flex;
  flex-direction: column;
}

.sidebar-menu-right {
  flex: 1;
  padding: 0 5px 0 20px;
}
.menu-close-button {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.menu-item {
  padding: 18px 0 18px 0;
  border-top: solid;
  cursor: pointer;
}

.arrow-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-item:last-child {
  border-bottom: solid;
}

.options {
  display: flex;
}

.instagram {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.instagram img {
  width: 30px;
  height: 30px;
}

a {
  cursor: pointer;
}

@media only screen and (max-width: 1020px) {
  .blur-effect {
    display: none;
  }

  body {
    overflow: hidden;
  }

  .logo {
    padding-right: 0px;

  }

  .sidebar {
    width: 100vw;
    height: 100vh;
  }
  .button {
    font-size: 21.1px;
    background-color: white;
    color: black;
    padding: 5px 3.3em 5px 3.3em;
  }

  .h1-index {
    font-size: 10vw;
  }

  .h2-index {
    font-size: 5vw;
  }
}
</style>

<template>
  <div v-if="hamMenu === true" class="blur-effect"></div>
  <div class="background">
    <div class="first-circle"></div>
    <div class="second-circle"></div>
    <div class="third-circle"></div>
    <div class="forth-circle"></div>
    <div class="fifth-circle"></div>
  </div>
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
          <div @click="navigate('hintergrundinformationen')" class="menu-item">
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
  <div class="wrapper">
    <div v-if="local === false" class="headbar">
      <div v-if="hamMenu === false" @click="hamMenu = true" class="hamburger">
        <img src="../assets/svg/hamburger.svg" alt="" />
      </div>
      <div class="logo">
        <img src="../assets/svg/logo.svg" alt="" />
      </div>
    </div>
    <div v-if="local === true" class="local-logo">
      <img src="../assets/svg/logo.svg" alt="" />
    </div>
    <div class="content">
      <div v-if="local == true" class="local-text">
        <p class="h1-index">Du wirst sterben.</p>
        <p class="h2-index">Plane jetzt deinen Abschied.</p>
      </div>
      <div v-if="local == false" class="text">
        <p class="h1-index">Du wirst sterben.</p>
        <p class="h2-index">Plane jetzt deinen Abschied.</p>
      </div>
      <div class="buttons">
        <button @click="navigate('start')" class="button">Start</button>
        <button @click="navigate('return')" class="button-grey">
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
.buttons{
  display: flex;
  flex-direction: column;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
}

.h2-index {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 48.19px;
  text-align: center;
  margin: 0;
  color: white;
  padding-bottom: 70px;
}

.button {
  font-size: 21.1px;
  background-color: white;
  color: black;
  padding: 5px 50px 5px 50px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0 0 20px 0;
  z-index: 1;
}

.button-grey {
  height: 39px;
  font-size: 21.1px;
  background-color: white;
  border: 0;
  border-radius: 21.1px;
  color: rgb(0, 0, 0, 0.4);
  padding: 5px 20px 5px 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  cursor: pointer;
}

.button-grey svg {
  filter: opacity(0.4);
}

/* .slide {
  height: 100%;
  display: flex;
  flex-direction: column;
} */

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: auto;
}

.headbar {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 5.2em);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 60px 42px 60px 42px;
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
  align-self: center;
  margin: auto;
  padding-right: 45px;
}
.logo img {
  width: 195px;
}

.local-logo {
  display: flex;
  justify-content: center;
  filter: invert();
  align-self: center;
  margin: auto;
  padding-right: 0;
}

.local-logo img {
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
  z-index: 2;
}

.blur-effect {
  position: absolute;
  top: 0;
  left: 440px;
  width: 100%;
  height: 100%;
  z-index: 100;
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
  .wrapper {
    height: 100svh;
    max-height: calc(768px - 4.6em);
  }

  .headbar {
  margin: 40px 42px 32px 42px;
  }

  .text{
    margin-top: 70px;
  }

  .local-text{
    margin-top: 40px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
    width: 100%;
    height: 100%;
    margin: auto;
  }

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

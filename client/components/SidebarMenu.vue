<template>
  <div class="sidebar-header">
    <img src="../assets/svg/logo.svg" alt="Todomat Logo" />
    <img
      class="menu-close-button"
      @click="requestClose()"
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
        <div @click="navigate('hintergrundinformationen')" class="menu-item">
          <p>Hintergrundinformationen</p>
        </div>
        <div @click="navigate('downloads')" class="menu-item">
          <p>Downloadmaterialien</p>
        </div>
        <div @click="navigate('datenschutz')" class="menu-item">
          <p>Kontakt und Datenschutz</p>
        </div>
      </div>
    </div>
    <div class="instagram">
      <a href="https://www.instagram.com/urbanextopien/" target="_blank"
        ><img src="../assets/svg/instagram.svg" alt="Instagram Icon" />
      </a>
    </div>
  </div>
</template>

<script setup>

const emits = defineEmits(["closeSidebarMenu"])

const navigate = (path) => {
  navigateTo(`/${path}`);
};

const requestClose = () => {
    emits("closeSidebarMenu");
};


</script>

<style scoped>
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
  .content {
    gap: 40px;
  }
  .blur-effect {
    display: none;
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
    font-size: 8vw;
    margin-top: 1em;
  }

  .h2-index {
    font-size: 5vw;
    padding-bottom: 0px;
  }

  .headbar {
    width: calc(100vw - 2.3em);
    margin: 10px 20px 10px 20px;
  }
}
</style>

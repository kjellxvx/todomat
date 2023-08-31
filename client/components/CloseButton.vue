<template>
  <div class="close-button-container">
    <div class="close-button" @click="Close">
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="30.0886"
          height="30.0886"
          rx="15.0443"
          transform="matrix(1 0 0 -1 0.911438 30.8496)"
          fill="#EAEAEA"
        />
        <mask
          id="mask0_231_126"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="3"
          y="3"
          width="25"
          height="25"
        >
          <rect x="3.96295" y="3.37695" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_231_126)">
          <path
            d="M9.63065 23.4653L15.963 17.133L22.2953 23.4653L23.513 22.2476L17.1807 15.9153L23.513 9.58298L22.2953 8.36523L15.963 14.6975L9.63065 8.36523L8.4129 9.58298L14.7452 15.9153L8.4129 22.2476L9.63065 23.4653Z"
            fill="black"
          />
        </g>
      </svg>
    </div>
  </div>
  <div v-if="abort" class="popup-container">
    <div class="popup">
      <p class="popup-headline">Achtung</p>
      <p class="popup-text">
        Wenn du abbrichst, gehen alle deine Eingaben verloren und der Todomat
        startet mit einer neuen Konfiguration.
      </p>
      <div class="button-container">
        <button @click="Back" class="popup-button">Zurück</button>
        <button @click="navigate('restart')" class="popup-button-white">
          Ja, neustarten
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const local = useLocal();
const abort = ref(false);

function Close() {
  abort.value = true;
}

function Back() {
  abort.value = false;
}

function navigate(path) {
  if (path === "restart") {
    if (local.value == true) {
      navigateTo("/?local=true");
    } else {
      navigateTo("/");
    }
  }
}
</script>

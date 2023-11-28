<template>
  <NuxtLayout name="web">
    <div class="slide">
      <HeaderCompWeb />
      <div class="textbox">
        <h1 lang="de">Downloadmaterialien</h1>
        <p>
          Hier finden sich Sticker zum Ausdrucken, um spätere
          Hinterlassenschaften im eigenen Haushalt schon zu Lebzeiten zu
          kennzeichnen. Am besten auf selbstklebendem Papier drucken.
        </p>
        <div class="download">
          <img
            class="download-image"
            src="../assets/downloads/Vorschau-Deutsch.png"
          />
          <button class="button" @click="Download('de')">Herunterladen</button>
        </div>

        <div class="download">
          <img
            class="download-image"
            src="../assets/downloads/Vorschau-Englisch.png"
          />
          <button class="button" @click="Download('en')">Download</button>
        </div>
      </div>
    </div>

    <div class="button-container">
      <button @click="navigate('')" class="button-white">Zurück</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
import HeaderCompWeb from "../components/HeaderCompWeb";

import DieserGegenstand from "~/assets/downloads/Sticker_5x5_Dieser Gegenstand.pdf";
import GeheimerGegenstand from "~/assets/downloads/Sticker_5x5_Geheimer Gegenstand.pdf";
import AlleGegenstände from "~/assets/downloads/Sticker_10x10_Alle Gegenstände.pdf";
import OffenesHaus from "~/assets/downloads/Sticker_10x10_Offenes Haus.pdf";

import ThisItem from "~/assets/downloads/Sticker_5x5_This Item.pdf";
import SecretItem from "~/assets/downloads/Sticker_5x5_Secret Item.pdf";
import AllThings from "~/assets/downloads/Sticker_10x10_All Things.pdf";
import OpenHouse from "~/assets/downloads/Sticker_10x10_Open House.pdf";

const downloadArray = ref([]);

const navigate = (path) => {
  navigateTo(`/${path}`);
};
onMounted(() => {});

const Download = (lng) => {
  if (lng === "de") {
    downloadArray.value = [
      {
        href: DieserGegenstand,
        download: "Sticker_5x5_Dieser Gegenstand.pdf",
      },
      {
        href: GeheimerGegenstand,
        download: "Sticker_5x5_Geheimer Gegenstand.pdf",
      },
      {
        href: AlleGegenstände,
        download: "Sticker_10x10_Alle Gegenstände.pdf",
      },
      { href: OffenesHaus, download: "Sticker_10x10_Offenes Haus.pdf" },
    ];
  } else if (lng === "en") {
    downloadArray.value = [
      { href: ThisItem, download: "Sticker_5x5_This Item.pdf" },
      { href: SecretItem, download: "Sticker_5x5_Secret Item.pdf" },
      { href: AllThings, download: "Sticker_10x10_All Things.pdf" },
      { href: OpenHouse, download: "Sticker_10x10_Open House.pdf" },
    ];
  }
  downloadArray.value.forEach((pdf) => {
    const link = document.createElement("a");
    link.href = pdf.href;
    link.download = pdf.download;
    link.click();
  });
};
</script>

<style scoped>


h1 {
  hyphens: auto;
}
.textbox {
  margin-bottom: 25px;
}

.button-container {
  margin-bottom: 50px;
}

.download {
  position: relative;
  display: inline-block;
}

.button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.download-image {
  display: block;
  max-width: 100%;
  height: auto;
  transition: filter 1.3s ease;
}

.download:hover .button {
  opacity: 1;
}

.download:hover .download-image {
  filter: blur(8px);
}

@media only screen and (max-width: 1020px) {
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: normal;
  }
  .button {
    margin-right: 0px;
    opacity: 1;
    position: inherit;
    top: 0%;
    left: 0%;
    transform: translate(0%, 0%);
  }
  .button-white {
    margin-right: 0px;
  }

  .download {
    position: inherit;
    display: flex;
    flex-direction: column;
  }

  .download-image {
    padding-bottom: 1em;
  }
}
</style>

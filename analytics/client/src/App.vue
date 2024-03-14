<template>
  <div class="slide-container" v-touch:swipe="handleSwipe">
    <router-view class="slide" v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterView, useRouter } from "vue-router";

const router = useRouter();

const pageIndex = ref(0);
const transitionDirection = ref("top");

const slideOrder = [
  "/",
  "/report01",
  "/report02",
  "/report03",
  "/report04",
  "/report05",
  "/report06",
  "/report07",
  "/report08",
];

const handleSwipe = (direction) => {
  console.log("Slide detected:", direction);
  transitionDirection.value = direction;

  if (direction === "top") {
    pageIndex.value = (pageIndex.value + 1) % slideOrder.length;
  }

  if (direction === "bottom") {
    pageIndex.value =
      (pageIndex.value - 1 + slideOrder.length) % slideOrder.length;
  }

  console.log(pageIndex.value);
  navigateToIndex(slideOrder[pageIndex.value]);
};

const navigateToIndex = (page) => {
  router.push({ path: `${page}` });
};

// Computed property to dynamically set transition classes
const transitionName = computed(() => {
  return `fade-${transitionDirection.value}`;
});
</script>

<style scoped>
.slide-container {
  height: 100vh;
  width: 100vw;
}

.slide {
  padding: 1em;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.fade-top-enter-active,
.fade-top-leave-active,
.fade-bottom-enter-active,
.fade-bottom-leave-active {
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.fade-bottom-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.fade-bottom-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.fade-top-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.fade-top-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.fade-top-enter-to,
.fade-bottom-enter-to {
  transform: translateY(0%);
}
</style>

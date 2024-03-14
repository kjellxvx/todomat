<template>
  <div
    class="slide-container"
    v-touch:swipe="handleSwipe"
    @mousemove="handleUserActivity"
  >
    <router-view class="slide" v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { RouterView, useRouter } from "vue-router";

const router = useRouter();

const pageIndex = ref(0);
const transitionDirection = ref("top");
const mode = ref("idle"); // Initial mode is idle
let idleTimer = null;
let userTimer = null;
let autoPlayInterval = null;

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

// Function to handle swipe
const handleSwipe = (direction) => {
  console.log("Slide detected:", direction);
  transitionDirection.value = direction;

  if (mode.value === "user") {
    if (direction === "top") {
      pageIndex.value = (pageIndex.value + 1) % slideOrder.length;
    }

    if (direction === "bottom") {
      pageIndex.value =
        (pageIndex.value - 1 + slideOrder.length) % slideOrder.length;
    }

    navigateToIndex(slideOrder[pageIndex.value]);
  }
};

// Function to navigate to index
const navigateToIndex = (page) => {
  router.push({ path: `${page}` });
};

// Computed property to dynamically set transition classes
const transitionName = computed(() => {
  return `fade-${transitionDirection.value}`;
});

// Function to handle user activity
const handleUserActivity = () => {
  console.log("USER ACTIVE");
  if (mode.value === "idle") {
    switchMode("user");
    resetIdleTimer();
  }
};

// Function to switch mode
const switchMode = (newMode) => {
  mode.value = newMode;
  console.log("NEW MODE: ", newMode);
  if (newMode === "user") {
    startIdleTimer();
  }
};

// Function to start idle timer
const startIdleTimer = () => {
  idleTimer = setTimeout(() => {
    switchMode("idle");
  }, 30000); // 30 seconds
};

// Function to reset idle timer
const resetIdleTimer = () => {
  clearTimeout(idleTimer);
  startIdleTimer();
};

// Watch for mode changes
watch(mode, (newMode) => {
  if (newMode === "idle") {
    autoPlaySlides();
  } else if (newMode === "user") {
    clearInterval(autoPlayInterval); // Stop autoplay when switching to user mode
  }
});

// Function to autoplay slides in idle mode
const autoPlaySlides = () => {
  clearInterval(autoPlayInterval); // Clear previous interval
  autoPlayInterval = setInterval(() => {
    let currentIndex = pageIndex.value;
    currentIndex = (currentIndex + 1) % slideOrder.length;
    navigateToIndex(slideOrder[currentIndex]);
    pageIndex.value = currentIndex;
  }, 10000); // 10 seconds
};

// Initialize idle timer
onMounted(() => {
  startIdleTimer();
});

// Clean up timers on component unmount
onUnmounted(() => {
  clearTimeout(idleTimer);
  clearTimeout(userTimer);
  clearInterval(autoPlayInterval);
});
</script>

<style>
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

.diagram-axis-wrapper {
  position: absolute;
  width: 100vh;
  left: calc((100vw - 100vh) - 100vh);
  top: 100vh;
}

.diagram-axis {
  position: relative;
  display: flex;
  justify-content: space-between;
  transform-origin: top right;
  transform: rotate(90deg);
}

.axis-text {
  margin: 0;
  padding: 0 2em 1em 2em;
  transform: rotate(180deg);
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 25px;
  color: #363ad1;
}

.diagram-axis .axis-text:last-child {
  color: #6cb1ab;
}

.option-row {
  display: flex;
  gap: 1em;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.option-circle {
  background-color: #363ad1;
  width: 3em;
  height: 3em;
  border-radius: 50%;
}

.p-percent {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 0;
  opacity: 0.2;
}

.p-label {
  font-family: "IBMPlexSans-Bold", sans-serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 0;
}
.invisible {
  opacity: 0;
}

@keyframes growAnimation {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes growBarAnimation {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

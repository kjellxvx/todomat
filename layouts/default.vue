<template>
  <div>
    <slot />
  </div>
  <div>
    <button
      @click="goToPage(previousPage)"
      class="arrow left"
      v-bind:style="{ display: displayNavigation }"
    >
      Previous
    </button>
    <button
      @click="goToPage(nextPage)"
      class="arrow right"
      v-bind:style="{ display: displayNavigation }"
    >
      Next
    </button>
  </div>
  <div>
    <p>{{ complete }}</p>
  </div>
  <div>
    <p>{{ todos }}</p>
  </div>
  <div>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
// SLIDE ORDER:
// Start
// Menu
// A1,
// A2,
//   A2_1
//   A2_2
// Menu
//   B1,
//   B2,
//   B2_1
//     B2_1_3_1
//     B2_1_3_1
// Menu

const complete = useComplete();
const todos = useTodos();
const data = useData();

const route = useRoute();

// Logic for rendering the page order
const slides = computed(() => {
  const slides = ["hello", "menu", "A1", "A2", "menu", "B1", "B2", "menu"];
  if (data.value["A2"] && data.value["A2"].options === "A2.1") {
    const pos = slides.indexOf("A2");
    slides.splice(pos + 1, 0, "A2_1", "A2_2");
  }
  if (data.value["B2"] && data.value["B2"].options === "B2.1") {
    const pos = slides.indexOf("B2");
    slides.splice(pos + 1, 0, "B2_1");
  }
  if (data.value["B2_1"] && data.value["B2_1"].options === "B2.1.3") {
    const pos = slides.indexOf("B2_1");
    slides.splice(pos + 1, 0, "B2_1_3_1", "B2_1_3_2");
  }
  return slides;
});

//
const displayNavigation = computed(() => {
  if (route.name !== "id") {
    return "none";
  } else {
    return "block";
  }
});

const currentPageIndex = ref(0);
const previousPage = computed(() => slides.value[currentPageIndex.value - 1]);
const nextPage = computed(() => slides.value[currentPageIndex.value + 1]);

function goToPage(page) {
  if (page) {
    currentPageIndex.value = slides.value.indexOf(page);
    console.log(currentPageIndex.value);
    navigateTo(`/${page}`);
  }
}

onMounted(() => {});
</script>

<template>
  <div>
    <slot />
  </div>
  <div>
    <button
      @click="goToPage(previousPage)"
      :disabled="!isButtonEnabled"
      class="arrow left"
      v-bind:style="{ display: displayNavigation }"
    >
      Previous
    </button>
    <button
      @click="goToPage(nextPage)"
      :disabled="!isButtonEnabled"
      class="arrow right"
      v-bind:style="{ display: displayNavigation }"
    >
      Next
    </button>
  </div>
  <div>
    <p>complete?</p>
    <p>{{ complete }}</p>
  </div>
  <div>
    <p>todos</p>
    <p>{{ todos }}</p>
  </div>
  <div>
    <p>entered data</p>
    <p>{{ data }}</p>
  </div>
  <div>
    <p>page index</p>
    <p>{{ index }}</p>
  </div>
  <div>
    <p>order</p>
    <p>{{ order }}</p>
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
const index = useIndex();
const order = useOrder();

// Logic for rendering the page order
const slides = computed(() => {
  const slides = [
    "menu",
    "A1",
    "A2",
    "menu",
    "B1",
    "B2",
    "menu",
    "C1",
    "menu",
    "D2",
    "menu",
    "F1",
    "menu",
    "F1",
    "menu",
  ];
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
  order.value = slides;
  return slides;
});

const displayNavigation = computed(() => {
  if (route.name !== "id") {
    return "none";
  } else {
    return "block";
  }
});

// check if selection is complete
const isButtonEnabled = computed(() => {
  return complete.value;
});

const previousPage = computed(() => slides.value[index.value - 1]);
const nextPage = computed(() => slides.value[index.value + 1]);

function goToPage(page) {
  if (index.value >= 0) {
    index.value = slides.value.indexOf(page);
    navigateTo(`/${page}`);
  }
}

onMounted(() => {});
</script>

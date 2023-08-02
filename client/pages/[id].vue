<template>
  <div class="slide">
    <HeaderComp />
    <h1>{{ headline }}</h1>
    <h2>
      <template v-if="slides[id].info">
        <template v-for="(part, index) in transformedQuestionParts">
          <template v-if="part.isLink">
            <a
              @click="headlineInfo"
              class="h-popup-link underline-link"
              v-html="part.content"
            ></a>
          </template>
          <template v-else>{{ part.content }}</template>
        </template>
      </template>
      <template v-else> <span v-html="formattedQuestion"></span></template>
    </h2>
    <div class="checkform">
      <div
        class="form-control"
        v-for="(option, key) in slides[id].options[0]"
        :key="key"
      >
        <div class="radio-label-left">
          <input
            type="checkbox"
            :id="key"
            :value="key"
            v-model="selectedOptions"
            @change="
              option.TextInput ? updateTextSelection() : updateSelection()
            "
          />
        </div>
        <div class="radio-label-right">
          <div :for="key">
            <span
              class="label-content"
              v-html="formatOptionContent(option)"
            ></span>
            <template v-if="option.TextInput">
              <InputComp
                :initialValue="inputValue"
                :placeholder="option.TextInput"
                :inputs="inputs"
                :inputName="key"
                @value-changed="onInputValueChange"
                :disabled="!selectedOptions.includes(key)"
                ref="inputComp"
                class="input-comp"
              />
            </template>
            <template v-if="option.info">
              <span @click="Info(key)" class="popup-link">Mehr Info</span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="keyboard-container"
    ref="keyboardContainerRef"
    :style="{ display: activateKeyboard() }"
  >
    <div class="keyboard">
      <SimpleKeyboard
        @onChange="onChange"
        @onKeyPress="onKeyPress"
        :input="inputs[inputName]"
        :inputName="inputName"
      />
    </div>
  </div>
</template>

<script setup>
import questionaire from "../questionaire.json";
import SimpleKeyboard from "../components/SimpleKeyboard";
import InputComp from "../components/InputComp";

const route = useRoute();
const id = route.params.id;

const inputValue = ref("");

const keyboard = useKeyboard();
const keyboardContainerRef = ref(null);

const complete = useComplete();
const todos = useTodos();
const data = useData();

const local = useLocal();
const headline = useHeadline();
const index = useIndex();
const order = useOrder();
const popup = usePopup();
const categories = useCategories();
const progress = useProgress();

const slides = questionaire.slides;
const question = slides[id].question;

const inputs = reactive({});
const selectedOptions = ref([]);
const inputName = ref("");
const multiSelection = slides[id].multi;

// format breaks in labels
function formatOptionContent(option) {
  return option.content.replace(/\n/g, "<br>");
}

// format breaks in question headlines
const formattedQuestion = computed(() => {
  return question.replace(/\n/g, "<br>");
});

// format popup links inside of question headlines
const transformedQuestionParts = computed(() => {
  const parts = question.split(/<a>(.*?)<\/a>/);

  return parts.map((part, index) => {
    if (index % 2 === 0) {
      return {
        isLink: false,
        content: part,
      };
    } else {
      return {
        isLink: true,
        content: part,
      };
    }
  });
});

// function to trigger the popup inside of a headline
function headlineInfo() {
  popup.value.isOpen = true;
  popup.value.content = slides[id].info;
}

// computed property that stores the selection
const selection = computed(() => {
  return { [id]: { options: [] } };
});

// computed property that handles already saved selection
const storedSelection = computed(() => {
  if (data.value[id]) {
    return data.value[id].options;
  } else {
    return [];
  }
});

// computed property that handles already saved inputs
const storedInputs = computed(() => {
  return (key) => {
    if (data.value[id]) {
      return data.value[id].input[key];
    } else {
      return {};
    }
  };
});

// function to open a popup
function Info(key) {
  popup.value.isOpen = true;
  popup.value.content = slides[id].options[0][key].info;
}

// function to update the categories the user has already answered
function updateCategories() {
  categories.value = Object.values(order.value)
    .filter((element) => element !== "menu" && element !== "confirmation")
    .reduce((acc, element) => {
      const key = element.charAt(0).toUpperCase();
      acc[key] = acc[key] || [];
      acc[key].push(element);
      return acc;
    }, {});

  const setCategoryComplete = (category) => {
    const elements = categories.value[category];
    return elements.every((element) => {
      const options = data.value[element]?.options;
      return options && options.length > 0;
    });
  };

  for (const category in categories.value) {
    if (setCategoryComplete(category)) {
      categories.value[category].complete = true;
    } else {
      categories.value[category].complete = false;
    }
  }

  for (const category in categories.value) {
    const index = category.charCodeAt(0) - 65;
    progress.value[index] = setCategoryComplete(category) ? 1 : 0;
  }
}

// function to update a selection when a checkbox without text-input is checked
function updateSelection() {
  const selectedOptionsArray = [...selectedOptions.value];

  // Clear textfields and remove unused inputs
  Object.keys(inputs).forEach((key) => {
    if (!selectedOptionsArray.includes(key)) {
      // console.log("clear textfield of " + key);
      delete inputs[key];
    }
  });

  // Code for single selection
  if (multiSelection === false) {
    selectedOptions.value.splice(0, selectedOptions.value.length - 1);
  }

  // Process selected options
  const localTodos = [];
  for (const selectedOption of selectedOptions.value) {
    const selected = slides[id].options[0][selectedOption];
    if (selected && selected.todo) {
      localTodos.push(selected.todo);
    }
  }

  // Update data and todos
  selection.value[id].options = selectedOptions;
  data.value = { ...data.value, ...selection.value };
  todos.value[id] = localTodos;

  // keyboard.value = false;
  complete.value = !isNotComplete();
  console.log("Selected Options:", selectedOptions.value);

  updateCategories();
}

// function to update a selection when a checkbox with text-input is checked
function updateTextSelection() {
  keyboard.value = true;
  const selectedOptionsArray = [...selectedOptions.value];

  // Clear textfields and remove unused inputs
  Object.keys(inputs).forEach((key) => {
    if (!selectedOptionsArray.includes(key)) {
      delete inputs[key];
    }
  });

  // Code for single selection
  if (multiSelection === false) {
    selectedOptions.value.splice(0, selectedOptions.value.length - 1);
  }

  // Process selected options
  const localTodos = [];
  for (const selectedOption of selectedOptions.value) {
    const selected = slides[id].options[0][selectedOption];
    if (selected && selected.todo) {
      localTodos.push(selected.todo);
    }
  }

  // Update data and todos
  selection.value[id].options = selectedOptions;
  data.value = { ...data.value, ...selection.value };
  todos.value[id] = localTodos;

  const keys = Object.keys(selectedOptions.value);
  console.log(selectedOptions.value[keys[keys.length - 1]]);
  inputName.value = selectedOptions.value[keys[keys.length - 1]];

  complete.value = !isNotComplete();
  console.log("Selected Options:", selectedOptions.value);
}

// function to handle if the selection is complete
function isNotComplete() {
  if (selectedOptions.value.length === 0) {
    return true;
  }
  return Object.entries(slides[id].options[0])
    .filter(([key, option]) => option.TextInput)
    .some(([key, option]) => {
      return selectedOptions.value.includes(key) && !inputs[key];
    });
}

// this method is called a textfield is active
function activateKeyboard() {
  if (local.value == true) {
    if (keyboard.value === true && selectedOptions.value.length > 0) {
      return "flex";
    } else {
      return "none";
    }
  } else {
    return "none";
  }
}

// function to handle the inputs of the inputComp whenever the input changes
const onInputValueChange = (input, inputId) => {
  inputValue.value = input;
  if (inputValue.value !== "") {
    complete.value = true;
  } else {
    complete.value = false;
  }
  inputs[inputId] = inputValue.value;
  selection.value[id].input = inputs;
  data.value = { ...data.value, ...selection.value };
};

// function to assign pressed button values to input of the selection
function onKeyPress(button) {
  selection.value[id].input = inputs;
  data.value = { ...data.value, ...selection.value };
}

// function to assign the entered input to the inputs array
function onChange(input) {
  inputs[inputName.value] = input;
  if (inputs[inputName.value] !== "") {
    complete.value = true;
  } else {
    complete.value = false;
  }
}

// Function to handle the click outside event
const handleClickOutside = (event) => {
  const clickedElement = event.target;
  const inputCompElements = document.querySelectorAll(".input-comp");

  if (
    keyboardContainerRef.value &&
    !keyboardContainerRef.value.contains(clickedElement)
  ) {
    let isInputComp = false;

    for (const inputCompElement of inputCompElements) {
      if (
        inputCompElement === clickedElement ||
        inputCompElement.contains(clickedElement)
      ) {
        isInputComp = true;
        break;
      }
    }
    if (!isInputComp) {
      keyboard.value = false;
    }
  }
};

onMounted(() => {
  // added Event Listener to handle clicks outside of the keyboard area
  document.addEventListener("click", handleClickOutside);

  headline.value = order.value[index.value].includes("A")
    ? "Dein Körper."
    : order.value[index.value].includes("B")
    ? "Deine Verabschiedung."
    : order.value[index.value].includes("C")
    ? "Deine Daten."
    : order.value[index.value].includes("D")
    ? "Deine Dinge."
    : order.value[index.value].includes("E")
    ? "Deine Gedenken."
    : order.value[index.value].includes("F")
    ? "Deine Geheimnisse."
    : "";

  keyboard.value = false;

  // handle complete states and already stored content
  if (data.value[id]) {
    complete.value = true;
    selectedOptions.value = storedSelection.value;
    if (data.value[id].input) {
      for (const key in storedSelection.value) {
        if (storedSelection.value.hasOwnProperty(key)) {
          const inputKey = storedSelection.value[key];
          if (storedInputs.value(inputKey)) {
            inputs[inputKey] = storedInputs.value(inputKey);
          }
        }
      }
    }
  } else {
    complete.value = false;
  }
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.underline-link {
  text-decoration: underline;
}
</style>

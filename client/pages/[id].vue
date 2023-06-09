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
      <label
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
          <label :for="key">
            <span
              class="label-content"
              v-html="formatOptionContent(option)"
            ></span>
            <template v-if="option.TextInput">
              <InputComp
                :inputs="inputs"
                :inputName="key"
                :placeholder="option.TextInput"
                @onInputFocus="onInputFocus"
                @onInputChange="onInputChange"
                :disabled="!selectedOptions.includes(key)"
                ref="inputComp"
              />
            </template>
            <template v-if="option.info">
              <span @click="Info(key)" class="popup-link">Mehr Info</span>
            </template>
          </label>
        </div>
      </label>
    </div>
  </div>
  <div class="keyboard-container" :style="{ display: activateKeyboard() }">
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

const complete = useComplete();
const todos = useTodos();
const data = useData();
const keyboard = useKeyboard();
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

function formatOptionContent(option) {
  return option.content.replace(/\n/g, "<br>");
}

const formattedQuestion = computed(() => {
  return question.replace(/\n/g, "<br>");
});

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

function headlineInfo() {
  console.log(slides[id].info);
  popup.value.isOpen = true;
  popup.value.content = slides[id].info;
}

const selection = computed(() => {
  return { [id]: { options: [] } };
});

const storedOption = computed(() => {
  if (data.value[id]) {
    return data.value[id].options;
  } else {
    return [];
  }
});

const storedInputs = computed(() => {
  return (key) => {
    if (data.value[id]) {
      return data.value[id].input[key];
    } else {
      return {};
    }
  };
});

function Info(key) {
  popup.value.isOpen = true;
  // console.log(slides[id].options[0][key].info)
  // console.log(key)
  popup.value.content = slides[id].options[0][key].info;
}

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

function updateSelection() {
  const selectedOptionsArray = [...selectedOptions.value];

  // Clear textfields and remove unused inputs
  Object.keys(inputs).forEach((key) => {
    if (!selectedOptionsArray.includes(key)) {
      console.log("clear textfield of " + key);
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

  keyboard.value = false;
  complete.value = !isNotComplete();
  updateCategories();
}

function updateTextSelection() {
  const selectedOptionsArray = [...selectedOptions.value];

  // Clear textfields and remove unused inputs
  Object.keys(inputs).forEach((key) => {
    if (!selectedOptionsArray.includes(key)) {
      console.log("clear textfield of " + key);
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

  // Update keyboard and completion status
  keyboard.value = true;
  complete.value = !isNotComplete();
}

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
    if (keyboard.value === true) {
      return "flex";
    } else {
      return "none";
    }
  } else {
    return "none";
  }
}

function onInputFocus(input) {
  console.log("Focused input:", input.target.id);
  keyboard.value = true;
  inputName.value = input.target.id;
}

// this method is called when the text input is changed using the real keyboard
function onInputChange(input) {
  console.log("Input changed directly:", input.target.id, input.target.value);

  if (input.target.value !== "") {
    complete.value = true;
  } else {
    complete.value = false;
  }
  inputs[input.target.id] = input.target.value;
  selection.value[id].input = inputs;
  data.value = { ...data.value, ...selection.value };
}

function onKeyPress(button) {
  console.log("button", button);
  selection.value[id].input = inputs;
  data.value = { ...data.value, ...selection.value };
}

function onChange(input) {
  inputs[inputName.value] = input;
  if (inputs[inputName.value] !== "") {
    complete.value = true;
  } else {
    complete.value = false;
  }
}

onMounted(() => {
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

  if (data.value[id]) {
    complete.value = true;
    selectedOptions.value = storedOption.value;
    if (data.value[id].input) {
      console.log("input there");
      console.log(storedOption.value);

      for (const key in storedOption.value) {
        if (storedOption.value.hasOwnProperty(key)) {
          const inputKey = storedOption.value[key];
          if (storedInputs.value(inputKey)) {
            console.log(storedInputs.value(inputKey));
            inputs[inputKey] = storedInputs.value(inputKey);
          }
        }
      }
    }
  } else {
    complete.value = false;
  }
});
</script>

<style scoped>
.underline-link {
  text-decoration: underline;
}
</style>

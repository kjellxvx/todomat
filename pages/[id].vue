<template>
  <div class="slide">
    <div class="header-row">
      <p class="brand">Todomat.</p>
      <p class="slogan">Dein Digitaler Hinterlassenschaftskonfigurator</p>
    </div>
    <div class="header-row">
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
      <div class="progress-counter"></div>
    </div>
    <h1>{{ headline }}</h1>
    <h2>{{ question }}</h2>
    <div class="checkform">
      <!-- Loop through each option in the id options array -->
      <label
        class="form-control"
        v-for="(option, key) in slides[id].options[0]"
        :key="key"
      >
        <div class="radio-label-left">
          <!-- Create a radio button with the ID set to the current option key -->
          <input
            type="radio"
            :id="key"
            :value="key"
            v-model="selectedOption"
            :name="'option_' + slides.A1.question"
            @change="
              option.TextInput ? updateTextSelection() : updateSelection()
            "
          />
          <!-- Create a label for the radio button with the content of the current option -->
          <label :for="key">{{ option.content }}</label>
        </div>
        <!-- Check if the current option requires a text input -->
        <div class="radio-label-right">
          <template v-if="option.TextInput">
            <InputComp
              v-if="option.TextInput"
              :inputs="inputs"
              :inputName="key"
              :placeholder="option.TextInput"
              @onInputFocus="onInputFocus"
              @onInputChange="onInputChange"
              :disabled="textInputsDisabled && selectedOption !== key"
              ref="inputComp"
            />
          </template>
          <template v-if="option.info">
            <div @click="Info(key)" class="popup-link">Mehr Info</div>
          </template>
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

const slides = questionaire.slides;
const question = slides[id].question;

const inputs = reactive({});
const textInputsDisabled = reactive({});
const selectedOption = ref("");
const inputName = ref("");

const selection = computed(() => {
  return { [id]: { options: "" } };
});

const storedOption = computed(() => {
  if (data.value[id]) {
    return data.value[id].options;
  } else {
    return "";
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

function updateSelection() {
  const selected = slides[id].options[0][selectedOption.value];
  if (selected.input) {
    complete.value = false;
  } else {
    complete.value = true;
  }
  if (selected.todo) {
    todos.value[id] = selected.todo;
  } else {
    delete todos.value[id];
  }
  console.log(selection.value);
  selection.value[id].options = selectedOption.value;
  data.value = { ...data.value, ...selection.value };
  keyboard.value = false;
}

// function to update checkboxes that also have a textfield
function updateTextSelection() {
  for (const inputName in inputs) {
    inputs.value[inputName] = "";
    complete.value = false;
  }
  selection.value[id].options = selectedOption.value;
  data.value = { ...data.value, ...selection.value };
  keyboard.value = true;
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
    selectedOption.value = storedOption.value;
    if (data.value[id].input) {
      console.log("input there");
      const inputKey = storedOption.value;
      console.log(storedInputs.value(inputKey));
      inputs[inputKey] = storedInputs.value(inputKey);
    }
  } else {
    complete.value = false;
  }
});
</script>

<style scoped>
form {
  display: grid;
  place-content: center;
}

.form-control {
  font-family: "IBMPlexSans-Regular", sans-serif;
  font-size: 20px;
  text-align: left;
  margin: 0px;
  display: flex;
  grid-template-columns: 1em auto;
  align-items: center;
  gap: 0;
}

.radio-label-left {
  display: flex;
}

.radio-label-left > label {
  padding-left: 20px;
  max-width: 800px;
}

.form-control + .form-control {
  margin-top: 1em;
}

.form-control--disabled {
  color: #959495;
  cursor: not-allowed;
}
input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--form-background);
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.08em solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--primary-color);
}

input[type="radio"]:checked::before {
  transform: scale(1);
}
</style>

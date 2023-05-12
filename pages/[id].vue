<template>
  <div class="slide">
    <h1>{{ question }}</h1>

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

<!-- <script>
import questionaire from "../questionaire.json";

export default {
  components: {},
  props: ["componentName"],
  data() {
    return {
      slides: questionaire.slides,
      inputs: {},
      textInputsDisabled: {},
      selectedOption: "",
      inputName: "",
    };
  },
  setup() {
    // const { id } = useRoute().params;

    return {
      id,
    };
  },
  computed: {
    selection() {
      return {
        [id]: {
          option: "",
        },
      };
    },
    name() {
      return "Slide" + this.id;
    },
    question() {
      return this.slides[this.id].question;
    },
    options() {
      return this.slides[this.id].options[0];
    },
  },
};
</script> -->

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

const slides = questionaire.slides;
const name = "Slide" + id;
const question = slides[id].question;
const options = slides[id].options[0];

const inputs = reactive({});
const textInputsDisabled = reactive({});
const selectedOption = ref("");
const inputName = ref("");

const selection = computed(() => {
  return { [id]: { options: "" } };
});

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
  if (keyboard.value === true) {
    return "flex";
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

onMounted(() => {
  console.log(`the component is now mounted.`);
});
</script>

<style scoped></style>

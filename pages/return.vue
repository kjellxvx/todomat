<template>
  <div class="slide-container">
    <div class="slide">
      <div class="textbox">
        <h1>Weiter machen</h1>
        <p>
          Code von dem Kassenbon eingeben, um mit der Bearbeitung fortzufahren.
        </p>
      </div>
    </div>
    <input
      type="text"
      id="codeInput"
      v-model="inputText"
      placeholder="Code"
      @input="onInputChange"
      @focus="onInputFocus"
    />
    <button @click="Start" type="button">Starten</button>
  </div>
  <div class="keyboard-container" :style="{ display: activateKeyboard }">
    <div class="keyboard">
      <SimpleKeyboard @onChange="onChange" />
    </div>
  </div>
</template>
<script setup>
import SimpleKeyboard from "../components/SimpleKeyboard";

const keyboard = useKeyboard();
const inputText = ref("");

const todos = useTodos();
const data = useData();

// This method is called when a text field is active
const activateKeyboard = computed(() => (keyboard.value ? "flex" : "none"));

// This method is called when the text input is changed using the real keyboard
function onInputChange(event) {
  const input = event.target.value;
  console.log("Input changed directly:", input);
}

// This method is called when the text input is changed using the on screen keyboard
function onChange(input) {
  inputText.value = input;
}

// This method is called when the input is focused
function onInputFocus() {
  keyboard.value = true;
}

function Start() {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Check if the code is present in the database
  const userData = { data: {}, todos: {} };
  // If present then ->
  data.value = userData.data;
  todos.value = userData.todos;
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  navigateTo(`/${"menu"}`);
}
</script>

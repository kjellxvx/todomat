<template>
  <input
    ref="inputRef"
    type="text"
    :placeholder="placeholder"
    :id="inputName"
    :value="inputValue"
    :disabled="disabled"
    @input="onInput"
    @focus="onFocus"
  />
</template>

<script setup>
import { ref, watch, nextTick } from "vue";

const keyboard = useKeyboard();

const props = defineProps([
  "initialValue",
  "placeholder",
  "inputs",
  "inputName",
  "disabled",
]);

let id = props.inputName;
let inputs = props.inputs;
let inputValue = ref(inputs[id]);
const inputRef = ref(null);

const emit = defineEmits(["valueChanged"]);

const onInput = (event) => {
  inputValue.value = event.target.value;
  emit("valueChanged", inputValue.value, id);
};

const onFocus = () => {
  keyboard.value = true;
};

watch(
  () => props.inputs[props.inputName],
  (newValue) => {
    inputValue.value = newValue;
  }
);

watch(
  () => props.disabled,
  async (newDisabled) => {
    if (!newDisabled) {
      await nextTick();
      inputRef.value.focus();
    }
  }
);
</script>

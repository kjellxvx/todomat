<template>
    <div :class="keyboardClass"></div>
  </template>
  
  <script>
  import Keyboard from "simple-keyboard";
  import "simple-keyboard/build/css/index.css";
  
  export default {
    name: "SimpleKeyboard",
    props: {
      keyboardClass: {
        default: "simple-keyboard",
        type: String,
      },
      input: {
        type: String,
      },
      inputName: {
        type: String,
      },
    },
    data: () => ({
      keyboard: null,
    }),
    mounted() {
      this.keyboard = new Keyboard({
        onChange: this.onChange,
        onKeyPress: this.onKeyPress,
        inputName: this.inputName,
      });
    },
    methods: {
      onChange(input) {
        this.$emit("onChange", input);
      },
      onKeyPress(button) {
        this.$emit("onKeyPress", button);
  
        if (button === "{shift}" || button === "{lock}") this.handleShift();
      },
      handleShift() {
        let currentLayout = this.keyboard.options.layoutName;
        let shiftToggle = currentLayout === "default" ? "shift" : "default";
  
        this.keyboard.setOptions({
          layoutName: shiftToggle,
        });
      },
    },
    watch: {
      inputName(inputName) {
        this.keyboard.setOptions({ inputName });
      },
      input(input) {
        this.keyboard.setInput(input);
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped></style>
  
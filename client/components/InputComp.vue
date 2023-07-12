<template>
    <input
      type="text"
      :id="inputName"
      :value="inputValue"
      :placeholder="inputName"
      @focus="onInputFocus" 
      @input="onInputChange"
    >
  </template>
  
  <script>
  export default {
    name: "InputComp",
    props: {
      inputs: {
        type: Object
      },
      inputName: {
        type: String
      }
    },
    methods: {
      onInputChange(input) {
        this.$emit("onInputChange", input);
      },
      onInputFocus(input) {
        this.$emit("onInputFocus", input);
      }
    },
    computed: {
      inputValue: function () {
        return this.inputs[this.inputName];
      }
    }
  };
  </script>
  
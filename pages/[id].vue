<template>
  <div class="slide">
    <h1>{{ question }}</h1>

    <div class="checkform">
      <!-- Loop through each option in the id options array -->
      <label
        class="form-control"
        v-for="(option, key) in slides[this.id].options[0]"
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
    <!-- <h1>{{ id }}</h1>
    <p>{{ name }}</p>
    <p>{{ selection }}</p> -->
  </div>
</template>

<script>
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
    const { id } = useRoute().params;
    return {
      id,
    };
  },
  computed: {
    selection() {
      return {
        [this.id]: {
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
</script>

<style scoped></style>

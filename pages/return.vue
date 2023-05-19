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
  <div class="keyboard-container" :style="{ display: activateKeyboard() }">
    <div class="keyboard">
      <SimpleKeyboard @onChange="onChange" />
    </div>
  </div>
</template>
<script setup>
import SimpleKeyboard from "../components/SimpleKeyboard";
import PocketBase from 'pocketbase';

/*const pb = new PocketBase('http://127.0.0.1:8090');
const authData = await pb.admins.authWithPassword('maxmustermann@mail.de', 'password123');*/

const pb = new PocketBase('https://delightful-artist.pockethost.io');
const authData = await pb.admins.authWithPassword('yinebo1036@andorem.com', 'password123');

const keyboard = useKeyboard();
const inputText = ref("");

const todos = useTodos();
const data = useData();
const local = useLocal();

const route = useRoute();


// Check if access via QR Code
onMounted(() => {
  if(route.query.code != undefined){
    Start(true);
    console.log(route.query.code);
  }
});


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
function onInputFocus(){
  keyboard.value = true;
}

async function Start(qrCode) {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////
  

  const code = inputText.value;
  const userData = { data: {}, todos: {} };
  const storedData = useStoredData();
  const userToken = useUserToken();

  if(qrCode == true){
    userToken.value = route.query.code;
  }else{
    userToken.value = inputText.value;
  }

  // Check if the code is present in the database
  const record = await pb.collection('user_data').getOne(userToken.value, {
    expand: 'relField1,relField2.subRelField',
  });

  // If present then ->
  if(record != null){ 
    userData.data = record.data;
    userData.todos = record.todos;

    console.log(userData);
    storedData.value = userData;
  }
  else{
    // Error Wrong Code
  }

  pb.authStore.clear();


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  navigateTo("/menu");
}
</script>

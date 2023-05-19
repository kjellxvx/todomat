<template>
  <div class="slide-container">
    <div class="slide">
      <div class="textbox">
        <h1>Beenden</h1>
        <p>Daten speichern und Bon drucken.</p>
      </div>
    </div>

    <button @click="Submit" type="button">Beenden</button>
  </div>
</template>
<script setup>
import PocketBase from 'pocketbase';

/*const pb = new PocketBase('http://127.0.0.1:8090');
const authData = await pb.admins.authWithPassword('maxmustermann@mail.de', 'password123');*/

const pb = new PocketBase('https://delightful-artist.pockethost.io');
const authData = await pb.admins.authWithPassword('yinebo1036@andorem.com', 'password123');

const todos = useTodos();
const data = useData();
const userToken = useUserToken();

async function Submit() {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////


  console.log(data.value);
  console.log(todos.value);

  // Push "data.value" and "todos.value" to the database
  const user_data = {
    "data": data.value,
    "todos": todos.value
  };

  if(userToken.value == false){
    // Create new record
    const record = await pb.collection('user_data').create(user_data);

    // Generate User Token
    userToken.value = record.id;
    console.log('Created new record: ' + userToken.value);
  }
  else{
    // If user Token already exists then ->
    // Update record
    const record = await pb.collection('user_data').update(userToken.value, user_data);
    console.log('Updated record: ' + userToken.value);
  }

  pb.authStore.clear();


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////                                                              //////////////////
  //////////////////                       DATA BASE CODE HERE                    //////////////////
  //////////////////                                                              //////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////

  navigateTo("/goodbye");
}
</script>

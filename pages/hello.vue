<template>
  <div class="slide-container">
    <div class="slide">
      <div class="textbox">
        <h1>
          Guten Tag! <br />
          Wir werden alle sterben.
        </h1>
        <p>
          Es ist darum hilfreich, sich jetzt darüber Gedanken zu machen und
          wichtige Informationen zu diesem Ereignis für Dich und die Lebenden zu
          hinterlegen.
        </p>
        <p>
          Es gibt auch einige ToDos zu erledigen. Der Todomat hilft Dir dabei!
        </p>
      </div>
    </div>
    <button @click="Restart" type="button">Neu Starten</button>
    <button @click="Return" type="button">Code Eingeben</button>
  </div>
</template>

<script setup>
function Restart() {
  navigateTo("/menu");
}
function Return() {
  navigateTo("/return");
}
</script>

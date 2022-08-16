<script setup lang="ts">
import { ref } from 'vue';
import Worker from './assets/worker.js?worker'

const enthusiasmLevel = ref("!!!");

const messageFromTheWorker = ref("No message yet...");

const workerLaunched = ref(false);

function launchWorker (){  
  if (workerLaunched.value) return;
  const worker = new Worker();
  worker.addEventListener("message", (msg) => {
    messageFromTheWorker.value = msg.data;
  });
  workerLaunched.value = true;
}

</script>

<template>
  <h1>Hello, World{{ enthusiasmLevel }}</h1>
  <br/>
  <button @click="launchWorker" v-if="!workerLaunched">Launch the worker</button>
  <br/>
  <p>{{ messageFromTheWorker }}</p>
</template>

<style>
</style>

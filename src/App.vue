<script setup lang="ts">
import { ref } from 'vue';
import jsonUrl from './assets/db.json'

const enthusiasmLevel = ref("!!!");

const importUrl = ref(jsonUrl);


</script>

<template>
  <h1>Hello, World{{ enthusiasmLevel }}</h1>
  <p>{{ importUrl }}</p>
</template>

<style>
</style>

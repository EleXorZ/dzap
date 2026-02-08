<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="app">
    <h1>Bienvenue sur Dzap</h1>
    <p>Projet Vue.js + Vite</p>
    <button type="button" @click="count++">Compteur : {{ count }}</button>
  </div>
</template>

<style scoped>
.app {
  font-family: system-ui, sans-serif;
  max-width: 40rem;
  margin: 2rem auto;
  text-align: center;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>

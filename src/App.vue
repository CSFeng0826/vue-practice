<script setup>
import { RouterView } from 'vue-router'
import NavbarComp from './components/NavbarComp.vue';
</script>

<template>
  <NavbarComp />
  <div class="container my-5">
    <RouterView />
  </div>
</template>

<style scoped>

.container {
  max-width: 1140px;
}
</style>

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

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
</style>

<script setup>
  import { RouterView } from 'vue-router'
  import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <div class="container my-5">
    <div class="col-md-9">
      <RouterView />
    </div>
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

  @media (min-width: 1200px) {
    .container{
      max-width: 1140px;
    }
  }
</style>
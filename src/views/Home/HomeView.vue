<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <h1 class="text-secondary">首頁</h1>
  <div class="desc">
    <p class="m-0">Vue 練習手冊，請同學搭配課程完成本練習，</p>
    <RouterLink class="desc-link" to="/basic">練習開始</RouterLink>。
  </div>
</template>

<style>
  .desc {
    background-color: var(--gray);
    border-radius: 5px;
    padding: 15px 20px;
  }

  .desc-link {
    font-weight: bolder;
    color: black;
  }

  .desc-link:hover {
    text-decoration: underline;
  }
</style>
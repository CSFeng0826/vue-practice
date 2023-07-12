<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="col-md-9">
    <h1 class="text-secondary">首頁</h1>
    <div class="container desc">
      <p class="m-0">Vue 練習手冊，請同學搭配課程完成本練習，</p>
      <RouterLink class="desc-link" to="/basic/dev">練習開始</RouterLink>。
    </div>
  </div>
  <RouterView />
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
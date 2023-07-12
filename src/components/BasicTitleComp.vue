<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const path = router.currentRoute.value.path;
</script>

<template>
    <h1 v-if="path==='/basic/dev'">Vue 的開發環境</h1>
    <h1 v-if="path==='/basic/instant'">建立 Vue 的應用程式</h1>
    <h1 v-if="path==='/basic/mvvm'">MVVM 是什麼樣的概念</h1>
    <h1 v-if="path==='/basic/directive'">指令</h1>
    <h1 v-if="path==='/basic/if_for'">模板語法的延伸 v-if 及 v-for</h1>
    <h1 v-if="path==='/basic/v_on'">處理互動式行為 v-on 指令</h1>
    <h1 v-if="path==='/basic/defined_var'">預先定義資料結構</h1>
    <h1 v-if="path==='/basic/modifiers'">修飾符與縮寫</h1>
    <h1 v-if="path==='/basic/v_class'">切換 Class</h1>
    <h1 v-if="path==='/basic/computed'">計算屬性</h1>
    <h1 v-if="path==='/basic/form'">表單雙向綁定</h1>
    <h1 v-if="path==='/basic/components'">元件畫</h1>
    <h1 v-if="path==='/basic/todo'">Todo 範例練習</h1>
    <h1 v-if="path==='/basic/v_lifecycle'">延伸介紹 - Vue 生命週期</h1>
</template>
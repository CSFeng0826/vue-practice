<script setup>
    import { createApp } from 'vue'
    import UnitTitle from '../../../components/UnitTitle.vue';
    import UnitDesc from '../../../components/UnitDesc.vue';

    let descList = ["使用 Vue Dev tools 查看本章節範例"];

    const app = createApp({});

    app.component("demo-grid", {
        template: {}
    });
</script>

<template>
    <UnitTitle title="Vue 的開發環境"></UnitTitle>
    <UnitDesc v-bind="{descList}"></UnitDesc>
    <form class="my-3">
        <label for="search-name-power">
            Search <input name="query" type="text">
        </label>
    </form>
</template>

<style scoped>
    table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
    }

    th {
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    td {
    background-color: #f9f9f9;
    }

    th, td {
    min-width: 120px;
    padding: 10px 20px;
    }

    th.active {
    color: #fff;
    }

    th.active .arrow {
    opacity: 1;
    }

    .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
    }

    .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
    }
</style>
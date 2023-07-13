<script setup>
    import { toRef } from 'vue'

    const props = defineProps({descList: Array});
    let descList = toRef(props.descList);
</script>

<template>
    <div class="unit-desc container">
        <ol class="m-0">
            <li class="desc-item" v-for="(desc, index) in descList" :key="index">
                {{ desc }}
            </li>
        </ol>
    </div>
</template>

<style>
    .unit-desc {
        background-color: var(--gray);
        width: 100%;
        padding: 15px 20px;
        border: none;
        border-radius: 5px;
    }

    .desc-item {
        padding: 0px;
        margin-left: 10px;
        font-size: 0.9rem;
    }
</style>
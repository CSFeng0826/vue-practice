<script setup>
import { toRef } from 'vue'

const props = defineProps(['title']);
let title = toRef(props.title);
</script>

<template>
    <h1 class="text-secondary mb-4">{{ title }}</h1>
</template>
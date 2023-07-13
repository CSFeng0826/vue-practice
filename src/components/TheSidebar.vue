<script setup>
    import { RouterLink } from 'vue-router';
    import { toRef } from 'vue'

    const props = defineProps({links: Array});
    let links = toRef(props.links);
</script>

<template>
    <div class="col-md-4 px-2">
        <p class="text-secondary fw-semibold mb-2">Basic</p>
        <ul class="d-flex flex-column list-unstyled">
            <li class="d-flex flex-column align-items-center" v-for="(link, index) in links" :key="index">
                <RouterLink class="btn-basic btn btn-block" :to="{path: link.link, params: links}">{{ link.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style>
    .btn-basic {
        width: 100%;
        color: var(--green-light);
        margin-bottom: 0.5rem;
    }

    .btn-basic:hover {
        color: var(--green-light);
        text-decoration: underline;
        text-decoration-color: var(--green-light);
    }

    .router-link-exact-active {
        background-color: var(--green-light);
        color: var(--white);
    }

    .router-link-exact-active:hover {
        text-decoration: none;
        color: var(--white);
        background-color: var(--green-light);
    }
</style>
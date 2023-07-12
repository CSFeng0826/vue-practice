<script setup>
    import { RouterLink } from 'vue-router';

    let links = [ { name: "Vue 的開發環境", link: "/basic/dev"},
                  { name: "建立 Vue 的應用程式", link: "/basic/instant"},
                  { name: "MVVM 是什麼樣的概念", link: "/basic/mvvm"},
                  { name: "指令", link: "/basic/directive"},
                  { name: "模板語法的延伸 v-if 及 v-for", link: "/basic/if_for"},
                  { name: "處理互動式行為 v-on 指令", link: "/basic/v_on"},
                  { name: "預先定義資料結構", link: "/basic/defined_var"},
                  { name: "修飾符 與 縮寫", link: "/basic/modifiers"},
                  { name: "切換 Class", link: "/basic/v_class"},
                  { name: "計算屬性", link: "/basic/computed"},
                  { name: "表單雙向綁定", link: "/basic/form"},
                  { name: "元件化", link: "/basic/components"},
                  { name: "Todo 範例練習", link: "/basic/todo"},
                  { name: "延伸介紹 - Vue 生命週期", link: "/basic/v_lifecycle"} ];
    
    
</script>

<template>
    <div class="nav-basic col-md-3">
        <p class="text-secondary fw-semibold">Basic</p>
        <ul class="d-flex flex-column list-unstyled">
            <li class="d-flex flex-column align-items-center" v-for="(link, index) in links" :key="index">
                <RouterLink class="btn-basic btn btn-block" :to="link.link">{{ link.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style>
.btn-basic {
    width: 100%;
    color: var(--green-light);
    line-height: 1.5;
    margin-bottom: 10px;
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
<template>
    <div id="navbar" class="d-flex align-items-center text-bg-success">
        <div id="navbar-title">Vue.js 練習手冊</div>
        <div id="navbar-item">
            <ul class="list-unstyled d-flex align-items-center">
                <li>基礎教學</li>
                <li>模板指令</li>
                <li>組件</li>
                <li>常用 API</li>
                <li>ES6</li>
            </ul>
        </div>
    </div>
</template>

<style>
#navbar {
    height: 60px;
    padding: 8px 16px;
}

#navbar-title {
    font-size: 1.2rem;
    padding: 5px 0;
    margin-right: 20px;
}

#navbar-item {
    padding: 0px;
}

ul.list-unstyled {
    margin: 0;
    padding: 0;
}

ul.list-unstyled li {
    padding: 10px;
}

</style>
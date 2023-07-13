<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <RouterLink class="navbar-brand" to="/">Vue.js 練習手冊</RouterLink>
        <button class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item"><RouterLink class="nav-link" to="/basic">基礎教學</RouterLink></li>
                <li class="nav-item"><RouterLink class="nav-link" to="/">模板指令</RouterLink></li>
                <li class="nav-item"><RouterLink class="nav-link" to="/">組件</RouterLink></li>
                <li class="nav-item"><RouterLink class="nav-link" to="/">常用 API</RouterLink></li>
                <li class="nav-item"><RouterLink class="nav-link" to="/">ES6</RouterLink></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
  a {
      text-decoration: none;
  }

  .navbar {
      background-color: var(--green-light);
  }

  .navbar-brand {
      color: var(--white);
      margin-left: 15px;
  }

  .navbar-brand:hover,
  .navbar-brand:active,
  .navbar-brand:focus {
      color: var(--white);
  }

  .nav-link {
      color: var(--white-nav-link);
  }

  .nav-link:hover {
      color: var(--white);
  }

  .nav-link:active,
  .nav-link:focus {
      color: var(--white);
  }
</style>
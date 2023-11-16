<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main id="body">
        <header>
            <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
            <!-- <HelloWorld msg="You did it!" /> -->

            <nav class="navbar">
                <span class="navbar__item navbar__item__logo">
                    Simple <span class="navbar__item__logo-vue">Vue</span> Practice App
                </span>

                <div class="navbar__links">
                    <span class="navbar__item">
                        <RouterLink to="/">Home</RouterLink>
                    </span>

                    <span class="navbar__item">
                        <RouterLink to="/calculator">Calculator</RouterLink>
                    </span>

                    <span class="navbar__item">
                        <RouterLink to="/tic-tac-toe">Tic-Tac-Toe</RouterLink>
                    </span>

                    <span class="navbar__item">
                        <RouterLink to="/about">About</RouterLink>
                    </span>

                    <span class="navbar__item__sentence">
                        Made with <span style="color: var(--red)">&#9825;</span> for
                        <span style="color: var(--blue)">byte5</span>
                    </span>
                </div>
            </nav>
        </header>

        <div class="view">
            <RouterView />
        </div>
    </main>
</template>

<style scoped>
#body {
    background: rgb(230, 230, 230);
    background: linear-gradient(
        180deg,
        rgba(230, 230, 230, 1) 0%,
        rgba(255, 255, 255, 1) 50%,
        rgba(230, 230, 230, 1) 100%
    );
    border-radius: 10px;
    height: 100%;
    display: flex;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    color: var(--dark-blue);
}

.navbar {
    font-family: 'DaysOne';
    color: var(--dark-blue);
    margin-bottom: 10vh;
    display: flex;
    align-items: center;
}

.navbar__item {
    margin-right: 1rem;
}

.navbar__item__logo {
    background-color: white;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    min-width: 98px;
}

.navbar__item__logo-vue {
    color: var(--vue-green);
}

.navbar__item__sentence {
    align-self: flex-end;
}

.byte5-logo {
    color: #007aff;
}

.view {
    display: flex;
    justify-content: center;
}

.router-link-exact-active {
    color: var(--red);
}
</style>

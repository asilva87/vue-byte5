<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main id="body">
        <header>
            <div id="logo-circle"></div>

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
                        <RouterLink to="/tictactoe">
                            <span>TicTacToe</span>
                        </RouterLink>
                    </span>

                    <span class="navbar__item">
                        <RouterLink to="/about">About</RouterLink>
                    </span>

                    <span class="navbar__item">
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
    height: calc(100% - 3rem);
    display: flex;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    color: var(--dark-blue);
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    overflow-y: scroll;
}

#logo-circle {
    position: absolute;
    width: 22rem;
    height: 22rem;
    background-color: rgba(30, 155, 215, 0.75);
    border-radius: 50%;
    top: -9rem;
    left: -7rem;
}

@media screen and (min-width: 1025px) {
    #logo-circle {
        position: relative;
        float: left;
        top: -12rem;
    }

    .navbar {
        position: absolute;
    }

    .view {
        margin-top: -12rem;
    }
}
.navbar {
    font-family: 'DaysOne';
    color: var(--dark-blue);
    margin-bottom: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar__item {
    margin-right: 1rem;
    position: relative;
    z-index: 10;
}

/* Adjust the style for small screens */
@media screen and (max-width: 768px) {
    .navbar {
        flex-direction: column; /* Change to a column layout on small screens */
        align-items: center;
    }

    .navbar__links {
        margin-top: 1rem; /* Add some spacing between items on small screens */
    }

    .navbar__item {
        margin: 0 5px; /* Remove right margin for items on small screens */
    }
}

.navbar__item__logo {
    background-color: white;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    min-width: 98px;
    z-index: 10;
}

.navbar__item__logo-vue {
    color: var(--vue-green);
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

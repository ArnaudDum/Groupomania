<template>
    <b-nav id="nav" class="row navbar navbar-expand">
        <a class="navbar-brand w-25 ml-5" href="/"><img height="150" width="auto" src="../assets/logos/icon-left-font-monochrome-white.png" alt="Logo Groupomania"/></a>
        <router-link class="nav-item h-md-100 w-md-25 mr-5" to="/">Inscription | Connexion</router-link>
    </b-nav>
</template>

<script>
export default {
    name: 'WelcomeNav'
}
</script>

<style lang="scss">
.navbar {
    height: 80px;
    justify-content: space-between;
    background-color: #1B2D4A;
    transition: background-color 400ms;
    .nav-item {
        text-decoration: none;
        color: white;
    }
    &:hover {
        background-color: #C15960;
        .nav-item {
        color: white;
        &:hover {
            font-weight: bold;
        }}
    }
}
</style>
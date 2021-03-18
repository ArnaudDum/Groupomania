<template>
    <b-row>
        <b-nav id="nav" class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand w-25 ml-md-5" href="/actualités"><img src="../assets/logos/icon-left-font-monochrome-white.png" alt="Logo Groupomania"/></a>
            <b-btn class="navbar-toggler mr-md-5" type="button" data-toggle="collapse" data-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </b-btn>
            <div id="navbarContent" class="collapse navbar-collapse mr-5">
                <router-link class="nav-item nav-link h-md-100 w-md-25 mr-5" to="/">Inscription | Connexion</router-link>
            </div>
        </b-nav>
    </b-row>
</template>

<script>
export default {
    name: 'WelcomeNav'
}
</script>

<style lang="scss">
#nav {
    width: 100%;
}
.navbar {
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
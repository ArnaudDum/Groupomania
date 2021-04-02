<template>
    <b-row>
        <b-nav id="nav" class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand w-25 ml-md-5" href="/actualites"><img src="../assets/logos/icon-left-font-monochrome-white.png" alt="Logo Groupomania"/></a>
            <b-btn class="navbar-toggler mr-md-5" type="button" data-toggle="collapse" data-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </b-btn>
            <div id="navbarContent" class="collapse navbar-collapse mr-5">
                <router-link class="nav-item nav-link mx-5" to="/actualites">Fil d'actualités</router-link> | 
                <router-link class="nav-item nav-link mx-5" to="/publier-un-article">Poster un article</router-link> | 
                <router-link class="nav-item nav-link mx-5" to="/profil">Mon profil</router-link> |
                <router-link @click.native="clearSession" class="nav-item nav-link mx-5" to="/">Déconnexion</router-link>
            </div>
        </b-nav>
    </b-row>
</template>

<script>
export default {
    name: 'Nav',
    methods: {
        clearSession() {
            sessionStorage.clear()
        }
    }
}
</script>

<style lang="scss">
@import '../../public/styles.scss';
#nav {
    width: 100%;
    .navbar {
        background-color: $blue-dark;
        transition: background-color 400ms;
        #toggle {
            color: white;
        }
        .nav-item {
            text-decoration: none;
            color: white;
        }
        &:hover {
            background-color: $red;
            .nav-item {
                color: white;
            &:hover {
                font-weight: bold;
            }}
        }
    }
}
</style>
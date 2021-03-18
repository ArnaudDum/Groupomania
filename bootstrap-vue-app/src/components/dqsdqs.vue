<template>

    <b-nav class="row navbar navbar-expand-lg d-flex justify-content-between">
        <a class="navbar-brand" href="/actualités">
            <img height="150" width="auto" src="../assets/logos/icon-left-font-monochrome-white.png" alt="Logo Groupomania"/>
        </a>
        <b-btn class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
            <span class="navbar-toggler-icon"></span>
        </b-btn>
        <div id="navbarContent" class="collapse navbar-collapse d-flex justify-content-end mr-5">
            <ul class="navbar-nav">
                <li class="nav-item active mx-5">
                    <router-link class="nav-link" to="/actualités">Fil d'actualités</router-link>
                </li>
                <li class="nav-item mx-5">
                    <router-link class="nav-link" to="/publier-un-article">Poster un article</router-link>
                </li>
                <li class="nav-item mx-5">
                    <router-link class="nav-link" to="/profil">Mon profil</router-link>
                </li>
            </ul>
        </div>
    </b-nav>


    <b-nav id="nav" class="row navbar navbar-expand-lg d-flex justify-content-between">
        <a class="navbar-brand w-25 ml-5" href="/actualités"><img height="150" width="auto" src="../assets/logos/icon-left-font-monochrome-white.png" alt="Logo Groupomania"/></a>
        <b-btn class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
            <span class="navbar-toggler-icon"></span>
        </b-btn>
        <div id="navbarContent" class="collapse navbar-collapse d-flex justify-content-end mr-5">
            <router-link class="nav-item mx-5" to="/actualités">Fil d'actualités</router-link> | 
            <router-link class="nav-item mx-5" to="/publier-un-article">Poster un article</router-link> | 
            <router-link class="nav-item mx-5" to="/profil">Mon profil</router-link>
        </div>
    </b-nav>

</template>
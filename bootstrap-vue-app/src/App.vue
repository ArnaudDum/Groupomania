<template>
  <div id="app">
    <b-nav id="nav">
      <router-link class="nav-item" to="/">Accueil</router-link>
      <router-link class="nav-item" to="/Actus">Fil d'actualités</router-link>
      <router-link class="nav-item" to="/Profil">Mon profil</router-link>
      <router-link class="nav-item" to="/APropos">A propos</router-link>
    </b-nav>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

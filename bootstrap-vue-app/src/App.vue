<template>
  <div id="app">
    <b-nav id="nav" class="navbar navbar-expand">
      <a class="navbar-brand" href="/"><img height="150" width="auto" src="./assets/logos/icon-left-font-monochrome-white.png" alt="Logo Groupomania"/></a>
      <router-link class="nav-item" to="/Actualités">Fil d'actualités</router-link> |
      <router-link class="nav-item" to="/Profil">Mon profil</router-link> |
      <router-link class="nav-item" to="/APropos">A propos</router-link>
    </b-nav>
    <router-view/>
  </div>
</template>

<script>

</script>

<style lang="scss">
#app {
  font-family: 'Roboto Condensed', sans-serif;
  min-height: 100vh;
  .navbar {
    height: 80px;
    justify-content: space-around;
    background: #1B2D4A;
    .nav-item {
      text-decoration: none;
      color: white;
    }
  }
}
</style>

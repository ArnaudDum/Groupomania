<template>
  <div id="app">
    <b-nav id="nav" class="navbar navbar-expand">
      <a class="navbar-brand w-25" href="/"><img height="150" width="auto" src="./assets/logos/icon-left-font-monochrome-white.png" alt="Logo Groupomania"/></a>
      <router-link class="nav-item h-md-100 w-md-25" to="/Actualités">Fil d'actualités</router-link> |
      <router-link class="nav-item h-md-100 w-md-25" to="/Profil">Mon profil</router-link> |
      <router-link class="nav-item h-md-100 w-md-25" to="/APropos">A propos</router-link>
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
        }
      }
    }
  }
}
</style>

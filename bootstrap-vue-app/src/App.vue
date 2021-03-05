<template>
  <b-container-fluid>
    <h1>Bienvenue dans votre réseau Groupomania !</h1>

    <WelcomePage/>

  </b-container-fluid>
</template>

<script>
import WelcomePage from './components/WelcomePage.vue'

export default {
  name: 'App',
  components: {
    WelcomePage
  }
}
</script>

<style lang="scss">

</style>

<template>
  <b-container fluid>

    <WelcomeNav/>
    
    <WelcomePage/>

  </b-container>
</template>

<script>
import WelcomePage from '../components/WelcomePage.vue'
import WelcomeNav from '../components/WelcomeNav.vue'

export default {
  name: 'Welcome',
  components: {
    WelcomePage,
    WelcomeNav
  }
}
</script>

<style lang="scss">
@import '../../public/styles.scss';
</style>

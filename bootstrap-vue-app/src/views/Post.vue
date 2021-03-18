<template>
  <b-container fluid>

      <Nav/>

      <Footer/>
      
  </b-container>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Post',
    components: {
      Nav,
      Footer
    }
}
</script>

<style lang="scss">

</style>

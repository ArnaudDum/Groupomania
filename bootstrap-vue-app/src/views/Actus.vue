<template>
  <b-container fluid>
      
      <Nav/>

      <div class="row">
        <b-col id="col1" class="col-12 col-md-2 h-100">
          <h1 class="h2 mt-4">Voici les dernières publications</h1>
          <p class="mt-3">Vous pouvez réagir et commenter les publications de vos collègues</p>
        </b-col>
        <b-col id="col2" class="col-12 col-md-10 h-100">
          
        </b-col>
      </div>

  </b-container>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
    name: 'Actus',
    components: {
      Nav
    }
}
</script>

<style lang="scss">
#col1 {
  color: white;
  position: fixed;
  background: #1B2D4A;
}
</style>

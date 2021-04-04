<template>
  <b-container fluid>
      
      <Nav/>

      <b-row id="main">
        <b-col id="col1" class="col-12 col-md-2">
          <h1 class="h2 mt-4">Voici les dernières publications</h1>
          <p class="mt-3">Vous pouvez réagir et commenter les publications de vos collègues</p>
        </b-col>
        <b-col id="col2" class="col-12 col-md-10 h-100 my-3">

          <PostCard/>

        </b-col>
      </b-row>

      <Footer/>

  </b-container>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import PostCard from '../components/PostCard.vue'

export default {
    name: 'Actus',
    components: {
      Nav,
      Footer,
      PostCard
    }
}
</script>

<style lang="scss">
@import '../../public/styles.scss';
#col1 {
  color: white;
  background: #1B2D4A;
}
@media (min-width: 1440px) {
  #main {
    min-height: 90vh;
  } 
}
</style>

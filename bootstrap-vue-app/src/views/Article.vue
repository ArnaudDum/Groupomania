<template>
  <b-container fluid>
      
      <Nav/>

      <b-row>
        <b-col id="comment-col-1" class="col-12 col-md-2">
          <h2>Commenter un article</h2>
          <p>Vous pouvez réagir aux articles de vos collègues en commentant sur le sujet.</p>
        </b-col>
        <b-col id="comment-col-2" class="col-12 col-md-10 mx-auto px-2 px-md-5 my-5">
          <PostDetail/>
        </b-col>
      </b-row>

      <Footer/>

  </b-container>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import PostDetail from '../components/PostDetail.vue'

export default {
    name: 'Article',
    components: {
      Nav,
      PostDetail,
      Footer
    }
}
</script>

<style lang="scss">
#comment-col-1 {
  background: #1B2D4A;
  color: white;
}
</style>

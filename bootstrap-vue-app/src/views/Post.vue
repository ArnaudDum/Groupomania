<template>
  <b-container fluid>

      <Nav/>

      <b-row>
        <b-col id="post-col-1" class="col-12 col-md-2">
          <h2 class="my-3 my-md-5">Vous pouvez poster un article</h2>
          <p class="my-3 my-md-5">Postez un article, vos collègues le verront apparaître dans leur fil d'actualités.</p>
        </b-col>
        <b-col id="post-col-2" class="col-12 col-md-8 mx-auto px-2 px-md-5 my-5">
          <h1 class="my-3 my-md-5">Poster un article</h1>
          <b-form class="px-lg-5 my-md-5">
            <b-form-group class="px-lg-5">
              <label class="h4">Titre de mon article :</label>
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group class="px-lg-5 d-flex flex-column justify-content-center">
              <label class="h4">Mon article :</label>
              <b-form-textarea rows="8" no-resize></b-form-textarea>
            </b-form-group>
            <b-btn id="post-btn" type="submit" class="mx-lg-5 px-md-5">Poster l'article</b-btn>
          </b-form>
        </b-col>
      </b-row>

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
#post-col-1 {
  background: #1B2D4A;
  color: white;
}
#post-col-2 {
  #post-btn {
    background: #C15960;
  }
}

</style>
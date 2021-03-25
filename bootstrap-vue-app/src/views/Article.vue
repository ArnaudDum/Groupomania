<template>
  <b-container fluid>
      
      <Nav/>

      <b-row>
        <b-col id="comment-col-1" class="col-12 col-md-2">
          <h2>Commenter un article</h2>
          <p>Vous pouvez réagir aux articles de vos collègues en commentant sur le sujet.</p>
        </b-col>
        <b-col id="comment-col-2" class="col-12 col-md-10 mx-auto px-2 px-md-5 my-5">
          <div>
            <h1>{{ post.post_title }}</h1>
            <h3>Posté par {{ post.name }}, le {{ post.post_date }}.</h3>
            <p>{{ post.post_text }}</p>
            <div>
                <b-form>
                    <b-form-group>
                        <b-form-input placeholder="Ajouter un commentaire..."></b-form-input>
                    </b-form-group>
                    <b-button type="submit">Envoyer</b-button>
                </b-form>
              </div>
          </div>
        </b-col>
      </b-row>

      <Footer/>

  </b-container>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
    name: 'Article',
    components: {
      Nav,
      Footer
    },
    props: ['id', 'post_title', 'post_text', 'name', 'post_date'],
    data() {
      return {
        post: [],
        pageId: this.$route.params.id
      }
    },
    mounted() {
      axios.get('http://localhost:3000/api/posts/' + this.pageId)
        .then(response => (this.post = response.data))
    }
}
</script>

<style lang="scss">
#comment-col-1 {
  background: #1B2D4A;
  color: white;
}
</style>

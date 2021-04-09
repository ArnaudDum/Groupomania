<template>
  <b-container fluid>

      <Nav/>

      <b-row id="main">
        <b-col id="post-col-1" class="col-12 col-md-2">
          <h2 class="my-3 my-md-5">Vous pouvez poster un article</h2>
          <p class="my-3 my-md-5">Postez un article, vos collègues le verront apparaître dans leur fil d'actualités.</p>
        </b-col>
        <b-col id="post-col-2" class="col-12 col-md-10 mx-auto px-2 px-md-5 my-5">
          <div id="post-area" class="p-3 p-md-5">
            <h1 class="my-3 my-md-5">Poster un article</h1>
            <b-form
              @submit.prevent="sendPost"
              class="px-lg-5 my-md-5">
              <b-form-group class="px-lg-5">
                <label class="h4">Titre de mon article :</label>
                <b-form-input
                  v-model="title"
                  required>
                </b-form-input>
              </b-form-group>
              <b-form-group class="px-lg-5 d-flex flex-column justify-content-center">
                <label class="h4">Mon article :</label>
                <b-form-textarea
                  v-model="text"
                  rows="8"
                  no-resize
                  required>
                </b-form-textarea>
              </b-form-group>
              <b-btn id="post-btn" type="submit" class="mx-lg-5 px-md-5">POSTER</b-btn>
              <b-btn id="pop-up" v-if="message" class="px-3 px-md-4">{{ this.message }}</b-btn>
            </b-form>
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
    name: 'Post',
    components: {
      Nav,
      Footer
    },
    data() {
      return {
        title: null,
        text: null,
        userId: null,
        name: null,
        message: null
      }
    },
    methods: {
      sendPost() {
        let token = localStorage.getItem('token')
        let auth = {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
        let postObj = {
          title: this.title,
          text: this.text,
          userId: this.userId,
          name: this.name,
        }
        axios.post('http://localhost:3000/api/posts/', postObj, auth)
          .then(response => (this.message = response.data.message))
      }
    },
    created() {
      this.userId = localStorage.getItem('userId');
      this.name = localStorage.getItem('user');
    }
}
</script>

<style lang="scss">
@import '../../public/styles.scss';
#post-col-1 {
  background: #1B2D4A;
  color: white;
}
#post-col-2 {
  #pop-up {
    color: #fff;
    background: #87c29f;
    letter-spacing: 0.2rem;
    border: 2px solid white;
  }
  #post-area {
    background: $blue-light-2;
  }
  #post-btn {
    background: $red-btn;
    letter-spacing: 0.2rem;
    border: none;
  }
}
@media (min-width: 1440px) {
  #main {
    min-height: 90vh;
  }
}
</style>
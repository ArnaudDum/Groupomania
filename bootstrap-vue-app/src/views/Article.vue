<template>
  <b-container fluid>
      
      <Nav/>

      <b-row>
        <b-col id="comment-col-1" class="col-12 col-md-2">
          <h2>Commenter un article</h2>
          <p>Vous pouvez réagir aux articles de vos collègues en commentant sur le sujet.</p>
        </b-col>
        <b-col id="comment-col-2" class="col-12 col-md-10 mx-auto px-2 px-md-5 my-5">
          <div id="articleCard" class="p-2 p-md-4 p-lg-5 mb-1 d-flex flex-column justify-content-around">
            <h1>{{ this.post.post_title }}</h1>
            <h3>Publié par {{ this.post.name }}, le {{ this.post.post_date }}.</h3>
            <p>{{ this.post.post_text }}</p>
          </div>
          <div>
            <h3 id="commentTitle" class="ml-3 ml-md-5 py-2 py-md-3">Commentaires</h3>
              <div :key="item.id_comment" v-for="item in comments" class="commentCard p-2 p-md-3 p-lg-4 my-1">
                <h5>{{ item.comment_name }}, le {{ item.comment_date }}</h5>
                <p>{{ item.comment_text }}</p>
              </div>
          </div>
          <div>
            <b-form>
                <b-form-group>
                    <textarea placeholder="Ajouter un commentaire..."></textarea>
                </b-form-group>
                <b-button id="subBtn" type="submit" class="px-5">ENVOYER</b-button>
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
    name: 'Article',
    components: {
      Nav,
      Footer
    },
    props: ['id', 'post_title', 'post_text', 'name', 'post_date'],
    data() {
      return {
        post: [],
        comments: [],
        pageId: this.$route.params.id
      }
    },
    mounted() {
      axios.get('http://localhost:3000/api/posts/' + this.pageId)
        .then(response => {
          let postObj = {
            id: response.data[0].id,
            post_title: response.data[0].post_title,
            post_text: response.data[0].post_text,
            name: response.data[0].name,
            post_date: response.data[0].post_date,
          }
          this.post = postObj
        })
      axios.get('http://localhost:3000/api/posts/' + this.pageId +'/comments')
        .then(response => {
          for(const element of response.data) {
            let commentObj = {
              id_comment: element.id,
              comment_name: element.name,
              comment_text: element.comment_text,
              comment_date: element.comment_date,
            }
            this.comments.push(commentObj)
          }
        })
    }
}
</script>

<style lang="scss">
@import '../../public/styles.scss';
#comment-col-1 {
  background: $blue-dark;
  color: white;
}
#articleCard {
  background: $blue-light-2;
}
#commentTitle {
  color: #fff;
}
.commentCard {
  background: $blue-light-2;
  width: 100%;
  p {
    word-wrap: break-word;
  }
  transform: scale(1);
  transition: transform 400ms ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
}
textarea {
  overflow: hidden;
  resize: none;
}
#subBtn {
  background: $bg-btn;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 1.3rem;
  transform: scale(1);
  transition: transform 300ms ease-out;
  letter-spacing: 0.3rem;
  &:hover {
    transform: scale(1.10);
  }
}

@media (max-width: 767px) {
  #articleCard {
    min-height: 300px;
  }
  textarea {
    width: 50%;
  }
}
@media (min-width: 768px) {
  #articleCard {
    min-height: 400px;
  }
  textarea {
    width: 75%;
  }
}
</style>

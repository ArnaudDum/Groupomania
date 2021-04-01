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
            <div class="d-flex justify-content-between">
              <h1>{{ this.post.post_title }}</h1>

              <b-btn v-if="this.post.id_user=this.userId" id="delete-btn" class="px-3"><i class="fas fa-trash-alt"></i>SUPPRIMER CET ARTICLE</b-btn>
              
            </div>
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
            <b-form @submit.prevent="sendComment" class="mt-5">
                <b-form-group>
                    <textarea v-model="comment" placeholder="Ajouter un commentaire..."></textarea>
                </b-form-group>
                <div class="d-flex justify-content-center justify-content-md-start">
                  <b-button id="subBtn" type="submit" class="px-5">ENVOYER</b-button>
                </div>
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
    data() {
      return {
        post: [],
        comments: [],
        pageId: this.$route.params.id,
        userId: null,
        comment: null,
        message: null,
        isAuthor: false,
      }
    },
    methods: {
      sendComment() {
        let commentObj = {
          postId: this.pageId,
          userId: sessionStorage.getItem('userId'),
          name: sessionStorage.getItem('user'),
          text: this.comment,
        }
        axios.post('http://localhost:3000/api/posts/comment', commentObj)
          .then(response => (this.message = response.data.message))
          .then(() => window.location.href=("http://localhost:8080/article/" + this.pageId))
      }
    },
    beforeCreate() {
      this.userId = sessionStorage.getItem('userId');
    },
    mounted() {
      axios.get('http://localhost:3000/api/posts/' + this.pageId)
        .then(response => {
          let postObj = {
            id: response.data[0].id,
            id_user: response.data[0].id_user,
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
              id_user: element.id_user,
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
  #delete-btn {
    color: #fff;
    font-size: 0.8rem;
    letter-spacing: 0.3rem;
    background: #B22222;
    i {
      margin-right: 1rem;
    }
  }
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
    width: 100%;
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

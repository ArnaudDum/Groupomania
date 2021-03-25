import Vue from 'vue'
import VueRouter from 'vue-router'
import Actus from '../views/Actus.vue'
import Profile from '../views/Profile.vue'
import Post from '../views/Post.vue'
import Welcome from '../views/Welcome.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/actualites',
    name: 'Actualités',
    component: Actus
  },
  {
    path: '/profil',
    name: 'Mon profil',
    component: Profile
  },
  {
    path: '/publier-un-article',
    name: 'Publier',
    component: Post
  },
  {
    path: '/article/:id_post',
    name: 'Article',
    component: Article
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Actus from '../views/Actus.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Actualités',
    name: 'fil d\'actualités',
    component: Actus
  },
  {
    path: '/Profil',
    name: 'Mon profil',
    component: Profile
  },
  {
    path: '/APropos',
    name: 'A propos',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

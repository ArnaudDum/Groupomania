import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    comments: [],
    users: []
  },
  getters: {

  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    getAllPosts({commit}) {
      axios.get('http://localhost:3000/api/posts/')
        .then(response => {
          commit('SET_POSTS', response.data)
        })
    }
  },
  modules: {

  }
})

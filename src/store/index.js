import Vue from 'vue'
import Vuex from 'vuex'
// const path = require('path')
// import path from 'path'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // viewSrc: ''
  },
  mutations: {
    // change(state) {
    //   console.log(__dirname, path)
    //   console.log(location)
    //   // state.viewSrc = path.join('http://localhost:8888', '/vue/land/src/static/tour/index.html')
    //   // state.viewSrc = '../static/tour/index.html'
    //   state.viewSrc = '../../../public/tour/index.html'
    //   console.log(state.viewSrc)
    // }
  },
  actions: {
    handle(mutations) {
      // mutations.change()
    }
  },
  modules: {}
})

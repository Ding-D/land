import Vue from 'vue'
import Vuex from 'vuex'
// const path = require('path')
// import path from 'path'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pcode: null
  },
  mutations: {
    change(state) {
      state.pcode = 60
    }
  },
  actions: {
    handle(vuex) {
      console.log(vuex)
      vuex.commit('change')
    }
  },
  modules: {}
})

import Vue from 'vue'
import Vuex from 'vuex'
import generalTrackList from './modules/general'
import TestModule from './modules/testModule'
console.log(TestModule)

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    generalTrackList,
    TestModule
  }
})

export default store

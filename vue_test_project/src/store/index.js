import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    count: 0,
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    count(state) {
      return state.count;
    }
  }
}

const moduleB = {
  state: {
    news: [],
    isLoading: false,
  }
}

export default new Vuex.Store({
  modules: {
    abracadabra: moduleA,
    brucuducu: moduleB, 
  }
})
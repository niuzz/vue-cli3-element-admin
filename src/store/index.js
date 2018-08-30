import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    SetUser: ({ commit }, user) => {
      commit('SET_USER', user);
      commit('SET_TOKEN', 'user');
    },
  },
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    auth: sessionStorage.getItem('Auth'),
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_AUTH: (state, auth) => {
      state.auth = auth;
    },
  },
  actions: {
    SetUser: ({ commit }, user) => {
      commit('SET_USER', user);
      commit('SET_AUTH', 'user');
      sessionStorage.setItem('Auth', 'user');
    },
  },
  getters: {
    asyncRoutes: state => state.permission.asyncRoutes,
    routers: state => state.permission.routers,
  },
});

import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login/index.vue';

import User from './views/User/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
    },
  ],
});

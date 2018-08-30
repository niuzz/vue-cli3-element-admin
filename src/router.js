import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login/index.vue';

import User from './views/User/index.vue';
import Admin from './views/Admin/index.vue';
import Home from './views/Home/index.vue';

Vue.use(Router);

export const synchronousRoute = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
];

export const asynchronousRoute = [
  {
    path: '/user',
    name: 'user',
    component: User,
    children: [
      {
        path: 'p1',
        name: 'user-p1',
        component: () => import('@/views/User/P1'),
      },
      {
        path: 'p2',
        name: 'user-p2',
        component: () => import('@/views/User/P2'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'a1',
        name: 'admin-a1',
        component: () => import('@/views/Admin/A1'),
      },
    ],
  },
];

export default new Router({
  routes: synchronousRoute,
});

/**
 * permission router
 * niuzz@hotmail.com
 */

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Message } from 'element-ui';
import { getAuth } from '@/utils/auth';

import router from './router';
import store from './store';

const whiteList = [
  '/login',
  '/home',
  'register',
];

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (getAuth()) {
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else if (store.getters.roles.length === 0) {
      store.dispatch('GetInfo').then(() => { // 拉取用户信息
        next();
      }).catch((err) => {
        store.dispatch('FedLogOut').then(() => {
          Message.error(err || 'Verification failed, please login again');
          next({ path: '/' });
        });
      });
    } else {
      next();
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    next('/login');
    NProgress.done();
  }
});

router.afterEach(() => {
  NProgress.done();
});

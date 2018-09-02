import router from './router';

const whiteList = [
  '/login',
  '/home',
  '/user/p1',
  '/admin',
];

router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    next('/login'); // 否则全部重定向到登录页
  }
});


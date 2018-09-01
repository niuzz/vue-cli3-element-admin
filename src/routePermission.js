import router from './router';
import store from './store';

router.beforeEach((to, form, next) => {
  const roles = ['user'];
  if (store.getters.roles.length === 0) {
    store.dispatch('permission/GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
      if (store.getters.roles.length === 0) {
        router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
        next({ ...to, replace: true });
        console.log(store.getters.roles);
      } else {
        console.log(store.getters.routers);
        next();
      }
    });
  } else {
    next();
  }
});


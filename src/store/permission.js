import {
  asynchronousRoute as asyncRouterMap,
  synchronousRoute as constantRouterMap,
} from '@/router';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0);
  }
  return true;
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(fliterAsyncRouterMap, roles) {
  const accessedRouters = fliterAsyncRouterMap.filter((route) => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

const permission = {
  namespaced: true,
  state: {
    routers: constantRouterMap,
    addRouters: [],
    roles: [],
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers.accessedRouters;
      state.routers = constantRouterMap.concat(routers.accessedRouters);
      state.roles = routers.roles;
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve) => {
        const { roles } = data;
        const accessedRouters = filterAsyncRouter(asyncRouterMap, roles);
        commit('SET_ROUTERS', { accessedRouters, roles });
        resolve();
      });
    },
  },
};

export default permission;

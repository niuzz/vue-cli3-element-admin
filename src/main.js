import 'font-awesome/css/font-awesome.min.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store/index';

import './plugins/element';
import './guards';

import './assets/theme-green/index.css';


Vue.config.productionTip = false;

new Vue({
  router,
  //  store,
  render: h => h(App),
}).$mount('#app');

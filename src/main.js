import Vue from 'vue';
import App from './App.vue';
// import router from './routerBasics';
import router from './paramsAsProps';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

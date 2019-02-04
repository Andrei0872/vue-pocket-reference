import Vue from 'vue';
import App from './App.vue';
import router from './router';
import titleMixin from './titleMixin';

Vue.config.productionTip = false;
// Use this mixin globally
Vue.mixin(titleMixin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

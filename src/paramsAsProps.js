import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue';
import Hello from './components/Params as props/Hello';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Hello
    }, // No props, no nothing
    {
      path: '/hello/:name',
      component: Hello,
      props: true
    }, // Pass route.params to props
    {
      path: '/static',
      component: Hello,
      props: {
        name: 'world'
      }
    }, // static values
    {
      path: '/dynamic/:years',
      component: Hello,
      props: dynamicPropsFn
    }, // custom logic for mapping between route and props
    {
      path: '/attrs',
      component: Hello,
      props: {
        name: 'attrs'
      }
    }
  ]
});

function dynamicPropsFn(route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}
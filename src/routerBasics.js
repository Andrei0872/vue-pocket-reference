import Vue from 'vue';
import Router from 'vue-router';
import User from './components/Basics/user/User.vue';
import UserStart from './components/Basics/user/UserStart.vue';
import UserDetail from './components/Basics/user/UserDetail.vue';
import UserEdit from './components/Basics/user/UserEdit.vue';
import Home from './components/Basics/Home.vue';
import Header from './components/Basics/Header.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      components: {
        default: Home,
        'headerTop': Header
      }
    }, {
      path: '/user',
      components: {
        default: User,
        'headerBottom': Header
      },
      children: [
        // If you use / - the name will be appended to your domain
        // If you leave away the / - will be appended to the parent route
        {
          path: '',
          component: UserStart
        }, // This gets selected by default
        {
          path: ':id',
          component: UserDetail,
          beforeEnter: (to, from, next) => {
            // console.log('inside route setup')
            // TODO: try path
            // next({ name: 'home' }); // Use the 'home' components
            // next(false); // Abort
            next();
          }
        },
        {
          path: ':id/edit',
          component: UserEdit,
          name: 'userEdit'
        }
      ]
    }, {
      path: '/redirect-me',
      redirect: {
        name: 'home'
      }
    }, {
      path: '*',
      redirect: '/'
    }
  ],
});

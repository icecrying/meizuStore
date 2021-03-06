import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
      ]
    },
    { path: '/category', component: () => import('./views/category.vue') },
    { path: '/test', component: () => import('./views/test.vue') }
  ]
});

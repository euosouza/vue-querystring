/* eslint-disable */

import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import RotaA from '../views/A.vue';
import RotaB from '../views/B.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Home',
    component: Login,
  },
  {
    path: '/a',
    name: 'HomeA',
    component: RotaA,
  },
  {
    path: '/b',
    name: 'HomeB',
    component: RotaB,
  },
  {
    path: '*',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to: any, from: any, next: any) => {
  console.log('BEFORE-EACH');

  if (Object.entries(from.query).some(([key, val]) => to.query[key] !== val)) {
    console.log('BEFORE-EACH IF');
    next({
      ...to,
      query: {
        ...from.query,
        ...to.query,
      },
      replace: true,
    });
  }
  next();
});

export default router;

import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import Refrigerator from '../components/Refrigerator';
import Thermostat from '../components/Thermostat';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/thermostat',
      component: Thermostat,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/refrigerator',
      component: Refrigerator,
      meta: {
        title: 'Refrigerator',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;

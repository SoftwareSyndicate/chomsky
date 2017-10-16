import Vue from 'vue'
import Router from 'vue-router'
import Pages from '@/pages'
import store from '../store'

Vue.use(Router)

const router = new Router({
  base: '/',
  routes: [
    {path: '*', redirect: '/home'},
    {path: '/home', name: 'home', component: Pages.HomePage},
  ],
})


router.beforeEach((to, from, next) => {
  next()
})


export default router

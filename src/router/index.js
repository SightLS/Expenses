import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'MainPage',
    component: () => import(/* webpackChunkName: "mainPage" */'../../src/views/MainView.vue'),
    children: [
      {
        path: '/main/add/payment/:category',
        name: 'addPayment',
        component: () => import(/* webpackChunkName: "About" */'../../src/views/MainView.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */'../../src/views/AboutView.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */'../../src/views/NotFoundView.vue')
  },
  {
    path: '*',
    redirect: {
      name: 'NotFound'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

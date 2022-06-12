import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/rail-fence',
    name: 'rail fence',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/RailFenceForm')
  },
  {
    path: '/przestawienia-macierzowe-A',
    name: 'przestawienia macierzowe A',
    component: () => import('../components/MatrixFormA')
  },
  {
    path: '/przestawienia-macierzowe-B',
    name: 'przestawienia macierzowe B',
    component: () => import('../components/MatrixFormA')
  },
  {
    path: '/generator',
    name: 'generator',
    component: () => import('../components/MatrixFormA')
  },
  {
    path: '/des',
    name: 'DES',
    component: () => import('../components/DESForm')
  },
  {
    path: '/rsa',
    name: 'RSA',
    component: () => import('../components/RSAForm')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

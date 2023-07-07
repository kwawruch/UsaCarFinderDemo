import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/car',
    name: 'car',
    component: () => import('../views/CarView.vue')
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router

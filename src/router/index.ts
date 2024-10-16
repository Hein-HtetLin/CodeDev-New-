import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DetailPage from "../views/DetailPage.vue"
import LoginPage from "../views/LoginPage.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/postDetail/:id',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/login/',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

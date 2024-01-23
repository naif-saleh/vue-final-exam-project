import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Q1View from '../views/Q1View.vue'
import Q2View from '../views/Q2View.vue'
import Q3View from '../views/Q3View.vue'
import Q4View from '../views/Q4View.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
  ,
  {
    path: '/Q1',
    name: 'Q1',
    component: Q1View
  },
  {
    path: '/Q2',
    name: 'Q2',
    component: Q2View
  },
  {
    path: '/Q3',
    name: 'Q3',
    component: Q3View
  }
  ,
  {
    path: '/Q4',
    name: 'Q4',
    component: Q4View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

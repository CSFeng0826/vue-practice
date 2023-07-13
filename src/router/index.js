import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/basic',
      name: 'Basic',
      component: () => import('@/views/Basic/BasicView.vue'),
      children: [
        {
          path: '',
          name: 'Dev',
          component: () => import('@/views/Basic/Unit/DevView.vue')
        }
      ]
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // Đây là kỹ thuật "lazy-loading" (tải chậm)
    //   // Component chỉ được tải về khi người dùng truy cập route này.
    //   component: () => import('@/views/AboutView.vue'),
    // },
  ],
})

export default router

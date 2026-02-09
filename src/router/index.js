import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import NewsletterPage from '@/views/NewsletterPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/newsletter',
      name: 'newsletter',
      component: NewsletterPage,
    },
  ],
})

export default router

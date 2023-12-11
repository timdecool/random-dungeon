import { createRouter, createWebHistory } from 'vue-router'
import CharactersSection from '@/views/CharactersSection.vue'
import DungeonsSection from '@/views/DungeonsSection.vue'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersSection
    },
    {
      path: '/dungeons',
      name: 'dungeons',
      component: DungeonsSection
    }
  ]
})

export default router

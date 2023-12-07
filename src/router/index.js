import { createRouter, createWebHistory } from 'vue-router'
import CharactersSection from '@/components/Page/CharactersSection.vue'
import DungeonsSection from '@/components/Page/DungeonsSection.vue'
import HomePage from '@/components/Page/HomePage.vue'


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

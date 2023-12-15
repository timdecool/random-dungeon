import { createRouter, createWebHistory } from 'vue-router'
import CharactersSection from '@/views/CharactersSection.vue'
import DungeonsSection from '@/views/DungeonsSection.vue'
import HomePage from '@/views/HomePage.vue'
import CharacterDetails from '@/views/CharacterDetailsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/characters/:view',
      name: 'characters',
      component: CharactersSection,
      props: true
    },
    {
      path: '/dungeons',
      name: 'dungeons',
      component: DungeonsSection
    },
    {
      path: '/characters/:name',
      name: 'CharacterDetails',
      component: CharacterDetails
    }
  ]
})

export default router

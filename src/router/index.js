import { createRouter, createWebHistory } from 'vue-router'
import PokedexWelcome from '@/views/PokedexWelcome.vue'
import PokedexList from '@/views/PokedexList.vue'
import PokedexFavorites from '@/views/PokedexFavorites.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'PokedexWelcome', component: PokedexWelcome },
    { path: '/list', name: 'PokedexList', component: PokedexList },
    { path: '/favorites', name: 'Favorites', component: PokedexFavorites },
  ],
})

export default router

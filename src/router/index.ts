import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProgressView from '../views/ProgressView.vue'
import ProfileView from '../components/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/updates',
      name: 'updates',
      component: ProgressView,
    },
    {
      path: '/profile/:email',
      name: 'profile',
      component: ProfileView,
      props: true,
    },
  ],
})

export default router

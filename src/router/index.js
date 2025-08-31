import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue'),
    },
    {
      path: '/projects/:slug',
      name: 'project-details',
      component: () => import('../views/ProjectDetails.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on route change
    if (savedPosition) {
      // If there's a saved position (browser back/forward), restore it
      return savedPosition
    } else {
      // For new navigation, scroll to top
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router

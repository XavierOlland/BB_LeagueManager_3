import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')

    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    {
     path: '/match/:id',
     name: 'match',
     component: () => import('../views/Match.vue')
    },
    {
     path: '/iframe/match/:id',
     name: 'forumMatch',
     component: () => import('../views/iframes/Match.vue')
    },
    {
      path: '/iframe/round/:id/:day',
      name: 'roundMatch',
      component: () => import('../views/iframes/Round.vue')
     }
  ]
})

export default router

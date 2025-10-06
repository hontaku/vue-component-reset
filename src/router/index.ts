import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: () => import('../pages/before.vue')},
    {path: '/after', component: () => import('../pages/after.vue')},
  ],
})

export default router

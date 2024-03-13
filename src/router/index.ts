import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/HomePage.vue')
    },
    {
      path: '/project/:name',
      name: 'project',
      props: (route) => ({ name: route.params.name }),
      component: () => import('@/pages/project/ProjectPage.vue')
    }
  ]
})

export default router

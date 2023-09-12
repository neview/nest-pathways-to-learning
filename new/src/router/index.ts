import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/guide',
      name: 'Guide',
      component: () => import('../views/GuidePages.vue')
    },
    {
      path: '/node',
      name: 'Node',
      component: () => import('../views/NodeList.vue')
    },
    {
      path: '/log',
      name: 'Log',
      component: () => import('../views/Log.vue')
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('../views/My.vue')
    },
    {
      path: '/combo',
      name: 'Combo',
      component: () => import('../views/Combo.vue')
    },
    {
      path: '/language',
      name: 'Language',
      component: () => import('../views/Language.vue')
    },
    {
      path: '/help',
      name: 'Help',
      component: () => import('../views/Help.vue')
    },
    {
      path: '/buy',
      name: 'Buy',
      component: () => import('../views/Buy.vue')
    },
    {
      path: '/email',
      name: 'Email',
      component: () => import('../views/Email.vue')
    },
    {
      path: '/edit',
      name: 'Edit',
      component: () => import('../views/Edit.vue')
    },
    {
      path: '/ceshi',
      name: 'Ceshi',
      component: () => import('../views/Ceshi.vue')
    },
    {
      path: '/loading',
      name: 'Loading',
      component: () => import('../views/components/loading.vue')
    }
  ]
})

export default router

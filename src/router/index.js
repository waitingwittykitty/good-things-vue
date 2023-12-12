import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/what-we-do',
      name: 'whatWeDo',
      component: () => import('../views/WhatWeDoView.vue')
    },
    {
      path: '/the-digital-divide',
      name: 'theDigitalDivide',
      component: () => import('../views/TheDigitalDivideView.vue')
    },
    {
      path: '/get-involved',
      name: 'getInvolved',
      component: () => import('../views/GetInvolvedView.vue')
    },
    {
      path: '/our-network',
      name: 'ourNetwork',
      component: () => import('../views/OurNetworkView.vue')
    },
    {
      path: '/insights',
      name: 'insights',
      component: () => import('../views/InsightsView.vue')
    }
  ]
})

export default router

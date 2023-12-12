import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const appMenu = ref([
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/what-we-do',
      label: 'What we do'
    },
    {
      path: '/the-digital-divide',
      label: 'The digital divide'
    },
    {
      path: '/get-involved',
      label: 'Get involved'
    },
    {
      path: '/our-network',
      label: 'Our network'
    },
    {
      path: '/insights',
      label: 'Insights'
    }
  ])

  return { appMenu: appMenu.value }
})

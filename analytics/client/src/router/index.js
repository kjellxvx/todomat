import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Report01 from '../views/Report01.vue'
import Report02 from '../views/Report02.vue'
import Report03 from '../views/Report03.vue'
import Report04 from '../views/Report04.vue'
import Report05 from '../views/Report05.vue'
import Report06 from '../views/Report06.vue'
import Report07 from '../views/Report07.vue'
import Report08 from '../views/Report08.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/report01',
      name: 'report01',
      component: Report01
    },
    {
      path: '/report02',
      name: 'report02',
      component: Report02
    },
    {
      path: '/report03',
      name: 'report03',
      component: Report03
    },
    {
      path: '/report04',
      name: 'report04',
      component: Report04
    },
    {
      path: '/report05',
      name: 'report05',
      component: Report05
    },
    {
      path: '/report06',
      name: 'report06',
      component: Report06
    },
    {
      path: '/report07',
      name: 'report07',
      component: Report07
    },
    {
      path: '/report08',
      name: 'report08',
      component: Report08
    }
  ]
})

export default router

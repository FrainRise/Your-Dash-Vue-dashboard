import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Todos from '@/views/Todos.vue'
import Stats from '@/views/Stats.vue'
import News from '@/views/News.vue'
import Colors from '@/views/Colors.vue'
import Charts from '@/views/Charts.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todos',
    component: Todos
  },
  {
    path: '/stats',
    component: Stats
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/colors',
    component: Colors
  },
  {
    path: '/charts',
    component: Charts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

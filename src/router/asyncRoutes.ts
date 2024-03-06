// export const modules = import.meta.glob('@/views/**/*.vue')
import type { RouteRecordRaw } from 'vue-router'

const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/index',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/index.vue'),
      }
    ]
  },
  {
    path: '/misc',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'test-page',
        name: 'TestPage',
        component: () => import('@/views/TestPage/index.vue'),
      }
    ]
  },
]

export default asyncRoutes
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import asyncRoutes from './asyncRoutes.ts'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index/dashboard'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes.concat(asyncRoutes),
})

export default router
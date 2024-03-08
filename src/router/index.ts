import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { usePermission } from '@/store/modules/permission'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index/dashboard'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

setTimeout(() => {
  const permissionStore = usePermission()
  permissionStore.generateRoutes()
}, 0)

router.beforeEach((to, from) => {
  console.log('to', to)
  console.log('from', from)
})

export default router
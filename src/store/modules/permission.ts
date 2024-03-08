import { defineStore } from 'pinia'
import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'
import asyncRoutes from '@/router/asyncRoutes'

interface PermissionState {
  permittedRoutes: RouteRecordRaw[]
}

export const usePermission = defineStore('permission', {
  state: (): PermissionState => ({
    permittedRoutes: [],
  }),
  actions: {
    generateRoutes() {
      this.permittedRoutes = [...asyncRoutes]
      asyncRoutes.forEach((route: RouteRecordRaw) => {
        router.addRoute(route)
      })
    },
  },
})
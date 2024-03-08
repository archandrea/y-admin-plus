<template>
  <a-layout class="layout">
    <Menu :menu="menuList"></Menu>
    <a-layout>
      <Header></Header>
      <a-layout-content>
        <RouterView v-slot="{ Component }"> <component :is="Component"></component> </RouterView>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Menu from './components/Menu/index.vue'
import Header from './components/Header/index.vue'

import { computed } from 'vue'

import { usePermission } from '@/store/modules/permission'
const permissionStore = usePermission()

const menuList = computed(() => permissionStore.permittedRoutes)
</script>

<style lang="scss">
.layout {
  @include full;
}
</style>

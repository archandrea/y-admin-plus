<template>
  <a-config-provider v-bind="globalConfig">
    <router-view></router-view>
  </a-config-provider>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const globalConfig = reactive({
  componentSize: 'medium',
})
</script>

<style lang="scss"></style>

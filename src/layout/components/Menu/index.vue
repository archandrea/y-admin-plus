<template>
  <a-layout-sider
    class="layout-menu_container"
    width="288"
    :style="menuContainerStyle">
    <a-menu
      style="width: 256px"
      mode="inline"
      :items="menu"
      @click="handleClick"></a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
const menuContainerStyle = {
  'background-color': '#fff',
}

defineProps({
  menu: {
    type: Array,
    required: true,
  },
})

const handleClick = (e: Event) => {
  console.log('click ', e)
}
</script>

<style lang="scss">
.layout-menu_container {
}
</style>

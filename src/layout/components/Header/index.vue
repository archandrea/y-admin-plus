<template>
  <a-layout-header
    class="layout-header_container"
    :style="headerContainerStyle"
    >Header</a-layout-header
  >
</template>

<script lang="ts" setup>
const headerContainerStyle = {
  width: '100%',
  height: '48px',
  'background-color': '#fff',
  'border-bottom': '1px solid #eee',
}
</script>

<style lang="scss">

</style>

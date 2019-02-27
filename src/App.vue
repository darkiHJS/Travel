<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
      <!-- 除外Detail组件不做缓存 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

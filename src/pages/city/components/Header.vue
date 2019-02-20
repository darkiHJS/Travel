<template>
  <div class="header">
    <router-link class="header-back" to="/"><span class="iconfont">&#xe624;</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~_style/config.styl';
  .header
    position relative
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    background-color $bgColor
    font-size .32rem
    .header-back
      position absolute
      color #fff
      width .64rem
      height .64rem
      text-align center
      font-size .4rem
      left 0
</style>

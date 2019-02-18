<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">内容</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .header
    position relative
    line-height .86rem
    padding-top .10rem
    padding-bottom .10rem
    background-color #00bcd4
    color #fff
    .header-left,.header-right
      position absolute
      text-align center
      top 0
    .header-left
      left 0
      width .64rem
    .header-right
      right 0
      width 1.24rem
    .header-input
      margin-left .84rem
      margin-right 1.24rem
      height .64rem
      line-height .64rem
      background-color #fff
      border-radius .1rem
      color #4f4f4f
</style>

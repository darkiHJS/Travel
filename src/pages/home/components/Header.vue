<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~_style/config.styl';
  .header
    position relative
    line-height .86rem
    padding-top .10rem
    padding-bottom .10rem
    background-color $bgColor
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
      color #fff
    .header-input
      margin-left .84rem
      margin-right 1.24rem
      padding-left .2rem
      height .64rem
      line-height .64rem
      background-color #fff
      border-radius .1rem
      color #ccc
</style>

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
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~_style/config.styl';
  .header
    display flex
    overflow hidden
    line-height $headerHeight
    background-color $bgColor
    color #fff
    .header-left,.header-right
      float left
      text-align center
      top 0
    .header-left
      width .64rem
    .header-right
      float right
      padding 0 .1rem
      min-width 1.24rem
      color #fff
    .header-input
      flex 1
      margin-top .12rem
      padding-left .2rem
      height .64rem
      line-height .64rem
      background-color #fff
      border-radius .1rem
      color #ccc
</style>

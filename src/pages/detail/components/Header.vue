<template>
  <div>
    <router-link class="header-abs"
      tag="div"
      to="/"
      v-show="showAbs"
    ><span class="iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <span class="iconfont">&#xe624;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
    // 全局事件一定要解绑
  }
}
</script>

<style lang="stylus" scoped>
  @import '~_style/config.styl';
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background-color $bgColor
    font-size .32rem
    .iconfont
      color #fff
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    color #fff
    .iconfont
      font-size .4rem
</style>

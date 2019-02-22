<template>
  <div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1809/75/756c6ed69c72ec41a3.img.jpg_600x330_f3aec735.jpg" />
    <div class="banner-info">
      <div class="banner-title">南浔古镇(AAAAA景区)</div>
      <div class="banner-number"><span class="iconfont">&#xe67c;</span>11</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
      z-index -1
    .banner-info
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      .banner-title
        position relative
        line-height .4rem
        color #fff
        left .2rem
        bottom .2rem
        font-size .36rem
        text-shadow 0 1px 2px rgba(0,0,0,.7)
      .banner-number
        position absolute
        right .2rem
        bottom .2rem
        width 1.2rem
        height .4rem
        background rgba(0,0,0,.5)
        border-radius .2rem
        font-size .24rem
        color #fff
        line-height .4rem
        text-align center
        .iconfont
          font-size .3rem
</style>

<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number"><span class="iconfont">&#xe67c;</span>{{ gallaryImgs.length }}</div>
      </div>
    </div>
    <common-gallary
      :imgs="gallaryImgs"
      v-show="showGallary"
      @close="handleBannerClose"
    />
  </div>
</template>

<script>
import CommonGallary from '_common/gallary/Gallary.vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleBannerClose () {
      this.showGallary = false
    }
  }
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
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
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

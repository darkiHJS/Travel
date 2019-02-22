<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1809/75/756c6ed69c72ec41a3.img.jpg_600x330_f3aec735.jpg" />
      <div class="banner-info">
        <div class="banner-title">南浔古镇(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont">&#xe67c;</span>11</div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
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
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1809/75/756c6ed69c72ec41a3.img.jpg_r_800x800_654e0e59.jpg',
        'http://img1.qunarzz.com/sight/p0/1704/25/2579f2a28d2fe301a3.water.jpg_r_800x800_08941db3.jpg',
        'http://img1.qunarzz.com/sight/p0/1604/d0/d06e04dab7c393be90.img.jpg_r_800x800_d2129656.jpg',
        'http://img1.qunarzz.com/sight/p0/1509/64/64e70800e4f55690.img.jpg_r_800x800_dc690d38.jpg',
        'http://img1.qunarzz.com/sight/p0/1704/90/90858ef64fd254f5a3.water.jpg_r_800x800_5e991a15.jpg',
        'http://img1.qunarzz.com/sight/p0/1509/2c/2c91fc876063298e.img.jpg_r_800x800_237328e3.jpg',
        'http://img1.qunarzz.com/sight/p0/1704/cf/cf89c7af58a579fca3.water.jpg_r_800x800_1d75bca9.jpg',
        'http://img1.qunarzz.com/sight/p0/1601/1c/1cdfd6a29fd1813990.img.jpg_r_800x800_e67485f7.jpg',
        'http://img1.qunarzz.com/sight/p0/1509/53/538a1ebbce479c59.img.jpg_r_800x800_f42d42dc.jpg',
        'http://img1.qunarzz.com/sight/p0/1509/a9/a9363a68ad467d10.img.jpg_r_800x800_eb1d16bc.jpg',
        'http://img1.qunarzz.com/sight/p0/1704/26/26c43e19d3ee71cba3.water.jpg_r_800x800_50f4a2f1.jpg'
      ]
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

<template>
  <swiper class="icons" :options="swiperOption">
    <swiper-slide v-for="(page,i) of pages" :key="i">
      <div class="icon" v-for="item of page" :key="item.id">
        <img class="icon-img" :src="item.url"/>
        <p class="icon-desc">{{ item.desc }}</p>
      </div>
    </swiper-slide>
    <div v-if="pages.length > 1" class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [{
        id: '0001',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '春节出游'
      }, {
        id: '0003',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      }, {
        id: '0004',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '主题乐园'
      }, {
        id: '0005',
        url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '湖州必游'
      }, {
        id: '0006',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
        desc: 'Kitty乐园'
      }, {
        id: '0007',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
        desc: '莫干山'
      }, {
        id: '0008',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
        desc: '南浔古镇'
      }, {
        id: '0009',
        url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '湖州影视城'
      }, {
        id: '0010',
        url: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '自然风光'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~_style/config.styl';
  @import '~_style/mixins.styl';
  .icons >>> .swiper-container
    height 3.7rem
  .icons
    width 100%
    overflow hidden
    height 3.7rem
    .icon
      float left
      width 25%
      margin-top .1rem
      height 1.5rem
      .icon-img
        display block
        width 1.1rem
        height 1.1rem
        margin-left auto
        margin-right auto
      .icon-desc
        text-align center
        color $darkTextColor
        ellipsis()
</style>

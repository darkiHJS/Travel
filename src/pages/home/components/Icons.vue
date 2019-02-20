<template>
  <swiper class="icons" :options="swiperOption">
    <swiper-slide v-for="(page,i) of pages" :key="i">
      <div class="icon" v-for="item of page" :key="item.id">
        <img class="icon-img" :src="item.url"/>
        <p class="icon-desc">{{ item.desc }}</p>
      </div>
    </swiper-slide>
    <div v-show="showPagination" class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      },
      showPagination: false
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  updated () {
    if (this.list.length > 8) {
      this.showPagination = true
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

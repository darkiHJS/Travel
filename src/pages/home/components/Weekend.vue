<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommentList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">
            {{ item.title }}
          </p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommentList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
        title: '美丽普陀山',
        desc: '人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/21/6fef209545ff14.jpg_r_640x214_4cf7cd14.jpg',
        title: '这里的温泉好棒',
        desc: '湖州的温泉总是夹杂着淡淡的香甜'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/c1/afe3ab32b3bc23.jpg_r_640x214_beb61760.jpg',
        title: '精致暖汤',
        desc: '天然高品质温泉，这是冬天秀美容颜首选之地，让你疲惫的身影在这里消失的无影无踪'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/2f/161295e0b5b915.jpg_r_640x214_e2857d1b.jpg',
        title: '湖州必游',
        desc: '这里是江南古城，这里是鱼米之乡'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/99/20ec55b6c6f7f8.jpg_r_640x214_559590a6.jpg',
        title: '探寻湖州文化古迹',
        desc: '品湖州历史之韵'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~_style/mixins.styl';
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      height .4rem
      color #ccc
      ellipsis()
</style>

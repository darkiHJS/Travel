<template>
  <div>
    <div class="title">热销排行</div>
    <ul>
      <li class="item" v-for="item of recommentList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">
            {{ item.title }}
          </p>
          <p class="item-desc">
            {{ item.desc }}
          </p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommentList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/75/756c6ed69c72ec41a3.img.jpg_200x200_3f15e7da.jpg',
        title: '南浔古镇',
        desc: '体会江南水乡之风韵'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/10/95ff336c53ec8958732cbf418954b766.jpg_200x200_8e5d2859.jpg',
        title: '金钉子远古世界',
        desc: '地质年代中3个断代“金钉子”之一'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1606/ec/ec2aae4d151636c3b4.img.jpg_200x200_5799e1fb.jpg',
        title: '杭州Hello Kitty乐园',
        desc: ''
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/bd/bd00da80780a2cc2.water.jpg_200x200_35efa460.jpg',
        title: '安吉江南天池温泉',
        desc: '这里特别受欢迎哟(๑‾ ꇴ ‾๑)'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/a3/a3bb04b457cc902f90.water.jpg_200x200_b2e4102f.jpg',
        title: '江南天池旅游区',
        desc: '这里最近很火哦，好多人都在点评它呢！'
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .2rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #fff
</style>

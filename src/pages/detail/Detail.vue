<template>
  <div>
    <detail-banner />
    <detail-header />
    <div class="content">
      <detail-list />
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票'
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height 50rem
}
</style>

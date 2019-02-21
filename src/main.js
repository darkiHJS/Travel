// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import fastClick from 'fastclick'
import VueAuesomeSwiper from 'vue-awesome-swiper'

import '_style/reset.css'// 重置样式
import '_style/border.css'// 1px边框解决方案
import '_style/iconfont/iconfont.css' // 引入图标库
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // 移动点击延迟
Vue.use(VueAuesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

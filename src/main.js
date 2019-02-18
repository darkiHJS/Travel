// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'

import './assets/styles/reset.css'// 重置样式
import './assets/styles/border.css'// 1px边框解决方案

Vue.config.productionTip = false
fastClick.attach(document.body) // 移动点击延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

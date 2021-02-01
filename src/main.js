// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 设置 js中可以访问 $cdn
import {$cdn} from '@/config'
// 国际化
import i18n from '@/i18n'
// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.less'
// 移动端适配
import 'lib-flexible/flexible.js'
// 复制剪切
import clipboard from 'clipboard'
// filters
import './filters'

Vue.prototype.$cdn = $cdn

Vue.prototype.clipboard = clipboard

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})

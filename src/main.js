import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 1. 导入某一个目录，默认会去找索引文件（index.js index.vue index.json） 基于webpack
// 2. @ 别名  指定的是 /src 路径  一个绝对路径。 基于webpack
import router from '@/router'

import axios from '@/api'

Vue.use(ElementUI)

Vue.prototype.$http = axios

Vue.config.productionTip = false

// 根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'
import home from '@/views/home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    //   登录
    { path: '/login', component: Login },
    { path: '/', component: home },
    // 首页:
    { path: '/', component: home }
  ]
})

export default router

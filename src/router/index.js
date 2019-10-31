import VueRouter from 'vue-router'
import Vue from 'vue'

import Login from '@/views/login'
import home from '@/views/home'
import welcome from '@/views/welcome'
import NotFound from '@/views/404'
import local from '@/utils/local'

import Article from '@/views/article'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    //   登录
    { path: '/login', component: Login },
    // 首页:
    {
      path: '/',
      component: home,
      children: [
        // 欢迎的2级路由
        { path: '/', component: welcome },
        // 内容
        { path: '/article', component: Article }
      ]
    },
    // 404处理
    { path: '*', component: NotFound }
  ]
})

// 路由导航守卫(前置导航守卫)
router.beforeEach((to, from, next) => {
  // to是要去哪跳转目标路由对象
  // from从哪来跳过来的路由对象
  // text放行
  // next()
  const user = local.getUser()
  if (to.path !== '/login' && !user) return next('/login')
  next()
})
export default router

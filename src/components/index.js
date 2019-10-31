// // 封装一个插件 注册所有的全局组件
// import myBread from '@/components/my-bread'
// // 导出一个对象
// export default {
//   install (Vue) {
//     // 基于vue做任何事(注册全局组件 指令 过滤器 挂载原型函数)
//     Vue.component('my-bread', myBread)
//   }
// }

// 封装一个插件  注册所有的全局组件
import MyBread from '@/components/my-bread'
export default {
  install (Vue) {
    // 基于Vue做任何事情（注册全局组件，指令，过滤器，挂载原型函数）
    Vue.component(MyBread.name, MyBread)
  }
}

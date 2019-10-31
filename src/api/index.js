// 导出一个配置好的axios提供给main挂载
import axios from 'axios'
import local from '@/utils/local'
import VueRouter from 'vue-router'

// 对axios进行配置axios发的请求  https://www.kancloud.cn/yunye/axios/234845
// baseURL作用设置基准地址(前面有一段相同)
axios.defaults.baseURL =
    'http://ttapi.research.itcast.cn/mp/v1_0/'
// 还可能 会有其它配置
// 配置来了
if (local.getUser()) {
  axios.defaults.headers.Authorization = `Bearer${local.getUser()}.token}`
}

// 添加请求拦截器
// 官方代码
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     // config 配置对象  获取token设置头
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     // 约定：一定要返回一个 错误的promise对象
//     // Promise.reject(error) 创建一个promise对象且一定失败
//     return Promise.reject(error);
// });
// axios请求拦截器
axios.interceptors.request.use(config => {
  // 1.获取token
  const user = local.getUser() || {}
  // 2.设置头部token
  config.headers.Authorization = `bearer ${user.token}`
  return config
}, err => {
  return Promise.reject(err)
})

// axios响应拦截器
// 官方代码
// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 响应成功的时候执行
//   // 对响应数据做点什么
//   return response
// }, function (error) {
//   // 响应失败的时候执行
//   // 对响应错误做点什么
//   // 获取响应状态码  然后判断是不是401  如果是跳转登录
//   // 获取响应对象  error.response
//   // 状态码 error.response.status
//   return Promise.reject(error)
// })

axios.interceptors.response.use(res => res, err => {
  // 请求失败
  if (err.response.status === 401) {
    // 登录跳转页面 http://localhost:8080/#/login
    // window.location.href='http://localhost:8080/#/login
    // window.location.hash='#/login
    // 建议使用vue-router来跳转,push是router实例的函数
    return VueRouter.push('/login')
  }
  return Promise.reject(err)
})
export default axios

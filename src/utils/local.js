// 导出一个本地操作用户信息的模块(设置用户,获取用户,清除用户)
const key = 'hm-toutiao-pc-85'
const local = {
  setUser (user) {
    // 存储setItem(key, value)key将来获取时候需要使用 value json字符串格式
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(key, jsonStr)
  },
  getUser () {
    const jsonStr = window.sessionStorage.getItem(key)
    return JSON.parse(jsonStr)
  },
  delUser () {
    window.sessionStorage.removeItem(key)
    //   clear()清除所有数据 不建议使用
    // setItem(key,'')删除
  }
}

export default local

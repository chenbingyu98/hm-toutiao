// 导出一个配置好的axios提供给main挂载
import axios from 'axios'

// 对axios进行配置
// baseURL作用设置基准地址(前面有一段相同)
axios.defaults.baseURL =
    'http://ttapi.research.itcast.cn/mp/v1_0/'
// 还可能 会有其它配置

export default axios

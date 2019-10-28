<template>
  <div class="container">
    <!-- 卡片容器 el-card是一个element组件,根元素上默认添加一个类和组件一直 -->
    <el-card class="box-card">
      <img src="../../assets/logo_index.png" alt />
      <!-- 表单 -->
      <!-- Loginform声明的数据对象 -->
      <el-form ref="loginForm" :model="Loginform" status-icon :rules="LoginRules">
        <el-form-item prop="mobile">
          <el-input v-model="Loginform.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="Loginform.code"
            placeholder="请输入验证码"
            style="width:240px;margin-right:8px;"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const checkMobile = (rule, value, callBack) => {
      // 判断value是否符合格式
      // 手机号格式: 1开头 第二位3-9 后边9位数
      if (/^1[3-9]\d{9}$/.test(value)) {
        callBack()
      } else {
        callBack(new Error('手机号格式错误'))
      }
    }
    return {
      Loginform: {
        mobile: '',
        code: ''
      },
      LoginRules: {
        mobile: [
          // 里边有个type选项: 指定内容的格式 date|email没有手机格式类型
          //  required是否必填 validator指定的一个函数(约定)
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码是6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 对整个表单进行验证给登录按钮的事件
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          // 验证成功 进行登录(发请求)
          // 这里要看文档
          // authorizations文档最后的地址文档里的内容正好等于上边的loginform
          // post(url ,参数对象)
          // get(url,{params:参数对象})新的方式,更方便
          // .then是结束
          // catch风格检查
          this.$http
            .post('authorizations', this.Loginform)
            .then(res => {
              // 成功 就跳转首页面
              this.$router.push('/')
            })
            .catch(() => {
              // 失败 提示信息$message elementui提供的
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  background-color: deeppink;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/1566572176841.jpeg) no-repeat center/cover;
  /* 背景图尺寸：拆分写法 background-size */
  /* 组合写法：background:..... / 背景图尺寸(width,height) */
  /* 特殊写法：cover  等比例缩放铺满容器多余不显示  contain 等比例缩放完全显示在容器内 */
  //   用的elementUI插件所以加点
  .el-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>

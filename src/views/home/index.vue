<template>
  <el-container class="cby">
    <!-- 三元表达式 -->
    <el-aside :width="isOpen?'200px':'64px'">
      <!-- logo设置 -->
      <div class="logo" :class="{smallLogo:!isOpen}"></div>
      <!-- 导航菜单 -->
      <!-- 整个菜单的容器 -->
      <!-- default-active="2" 当前激活菜单的 index   菜单项的index的值和default-active的值相等 当前菜单想被选中-->
      <!-- background-color="#545c64"  背景样式-->
      <!-- text-color="#fff"  默认文本颜色-->
      <!-- active-text-color="#ffd04b"  激活文本颜色-->
      <el-menu
        default-active="$route.path"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-right:none"
        :collapse="!isOpen"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <!-- 图标 -->
        <span class="el-icon-s-fold icon" @click="toggleMenu"></span>
        <!-- 文字 -->
        <span class="text">江苏传智博客科技教育有限公司</span>
        <!-- 下拉菜单组件 -->
        <el-dropdown class="dropdown" @command="handleClick">
          <span class="el-dropdown-link">
            <img class="headIcon" :src="photo" alt />
            <span class="userName">{{name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- 在容器组件上有一个事件@command事件与click相同不过它可以传参 -->
            <el-dropdown-item icon="el-icon-setting" command="setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 2级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import local from '@/utils/local'

export default {
  methods: {
    toggleMenu () {
      // 切换侧边栏 展开与收起
      this.isOpen = !this.isOpen
    },
    handleClick (command) {
      // command值setting|logout
      // 根据command值去执行不同的业务
      this[command]()
      // this.setting()===command setting
      // this.logout()===command logout
    },
    // 绑定的click事件无效
    // 给的是element提供的组件绑定click,如果组件不支持click,就无法触发
    // 组件不支持,就给组件解析后的dom绑定
    // vue提供了事件修饰符功能,prevent once stop--native把事件绑定在原生DOM上
    setting () {
      this.$router.push('/setting')
    },
    logout () {
      local.delUser()
      this.$router.push('/login')
    }
  },
  created () {
    const user = local.getUser() || {}
    this.photo = user.photo
    this.name = user.name
  },
  data () {
    return {
      // 是不是展开的  是展开的
      isOpen: true,
      // 头像
      photo: '',
      // 名称
      name: ''
    }
  }
}
</script>

<style scoped lang='less'>
.cby {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: #002244 url(../../assets/logo_admin.png) no-repeat
        center/140px auto;
    }
    // 覆盖大图
    .smallLogo {
      background-image: url(../../assets/logo_admin_01.png);
      background-size: 36px auto;
    }
  }
  .el-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 30px;
      // vertical-align 属性设置元素的垂直对齐方式。
      // middle把此元素放置在父元素的中部。
      vertical-align: middle;
    }
    .text {
      margin-left: 10px;
      vertical-align: middle;
    }
    .dropdown {
      float: right;
      .headIcon {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .userName {
        margin-left: 5px;
        font-weight: 700;
        vertical-align: middle;
      }
    }
  }
}
</style>

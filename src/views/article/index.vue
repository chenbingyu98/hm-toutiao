<template>
  <div class="container-article">
    <!-- 筛选条件布局 -->
    <el-card>
      <!-- 头 -->
      <div slot="header">
        <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb> -->
        <!-- 使用面包屑组件 -->
        <my-bread>内容管理</my-bread>
      </div>
      <!-- 筛选结果布局 -->
      <!-- 表单 -->
      <el-form label-width="80px" size="small">
        <el-form-item label="状态: ">
          <el-radio-group v-model="radio.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道: ">
          <el-select v-model="radio.channel_id" placeholder="请选择">
            <el-option
              v-for="item in channelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期: ">
          <el-date-picker
            type="daterange"
            v-model="dateArr"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 缔造结果布局 -->
    <page>
      <!-- div是2.60vue使用的写法下表是现在自己的4.o -->
      <!-- <div slot="content" slot-scope="scope">{{scope.pn}}</div> -->
      <template v-slot:content="scope">内容{{scope.pn}}</template>
      <div slot="footer"></div>
    </page>
  </div>
</template>

<script>
import Page from '@/test/page'
export default {
  components: { Page },
  data () {
    return {
      // 提交给后台的参数对象
      // 由axios进行数据提交,字段的值null,axios是不会提交该字段
      radio: {
        status: null,
        channel_id: null
        // dateArr: []
      },
      channelOptions: [
        { value: 1, label: 'Java' },
        { value: 2, label: '前端' }
      ],
      dateArr: []
    }
  }
}
</script>

<style scoped lang='less'>
</style>

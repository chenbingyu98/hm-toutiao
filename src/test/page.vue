<template>
  <div class="page">
    <p>header</p>
    <div>
      <slot name="content" :pn="pageName"></slot>
    </div>
    <p>
      <slot>后置尾</slot>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageName: '我是江天昊'
    }
  }
}
</script>

<style scoped lang='less'>
</style>

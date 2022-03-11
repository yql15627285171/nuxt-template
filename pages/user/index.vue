<!--
 * @Author: huangl
 * @Date: 2021-09-16 11:37:37
 * @LastEditors: YQL
 * @LastEditTime: 2022-03-11 10:29:51
 * @Description: file content
-->
<template>
  <div @click="check" class="user">
    <span class="bbb">我是user page</span></div>
</template>
<script>
export default {
  // layout: 'myLayouts',
  // head() {
  //   return this.$seo('用户', '快马用户')
  // },

  beforeRouteLeave(to, from, next) {
    console.log('准备要离开了')
    let bl = window.confirm('是否要离开')
    next(bl)
  },
  // transition: 'test',
  methods: {
    check() {
      this.$router.push({ name: 'user-id', params: { id: 1 } })
    },
  },
}
</script>
<style lang="scss" scoped>
.user{
  .bbb{
    font-size: 30px;
  }
  
}
</style>


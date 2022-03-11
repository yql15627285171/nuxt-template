<template>
  <div>
    <nuxt-link to="/user">用户</nuxt-link>
    <nuxt-link :to="{ name: 'user-id', params: { id: 1 } }">用户详情</nuxt-link>
    <Nuxt />
  </div>
</template>
<script>
export default {
  middleware() {
    console.log('middleware layout')
  },
}
</script>

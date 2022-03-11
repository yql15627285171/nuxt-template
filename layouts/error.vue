<template>
  <div>
    <h3 v-if="error.statusCode">{{ error.message }}</h3>
    <h3 v-else>应用发送异常</h3>
  </div>
</template>
<script>
export default {
  // 接受错误信息 erroe:{statusCode,message}
  props: ['error'],
}
</script>
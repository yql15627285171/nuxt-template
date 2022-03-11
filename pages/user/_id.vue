<template>
  <div>用户详情</div>
</template>
<script>
export default {
  name: 'usee-detail',
  validate({ params, query }) {
    return typeof params.id === 'number'
  },
}
</script>
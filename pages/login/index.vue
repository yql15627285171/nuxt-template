<template>
  <div class="login-contianer">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      form: { 
        account: '',
        password: '',
      },
    }
  },
  methods: {
    onSubmit() {
      setTimeout(async () => {
        const data =  {
          id: 1,
          name: 'xiaoming',
          age: 18,
          token: 'fjeh63278hdgf7sga7e3h2',
        }
        await this.$store.dispatch('user/u_set_info', data)
        // this.$router.push('/')
        this.$cookies.set('token',data.token)
        this.$cookies.set('user',data)
      }, 2000)
    },
  },
}
</script>
<template>
  <div class="home">
    <Hello language="Nuxt"></Hello>
    <el-button type="primary" @click="jump">错误信息截取</el-button>
    <nuxt-link to="/user">用户</nuxt-link>
    <div class="me">{{$t('quality')}}</div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  layout:'myLayouts',
  // middleware:'auth', 
  middleware() {
    // console.log('middleware page')
  },

  // 参数校验
  validate({ params, query }) {
    // 校验业务
    // console.log('validate')
    //
    return true
  },

  // 读数据，返回给组件
  async asyncData({ app }) {
  },

  head() {
    // return this.$seo(this.title, this.keywords, [])
    return {
      title: this.title,
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.content,
        },
      ],
    }
  },

  // 读数据 vuex
  fetch({ store }) {
    // console.log('fetch')
  },

  beforeCreate() {
    // console.log('beforeCreate')
  },
  created() {
    // console.log('created')
  },

  beforeMount() {
    // console.log('beforeMount')
    
  },
  mounted() {
    // console.log('mounted1')
    // this.$nuxt.$loading.start()
    // setTimeout(() => this.$nuxt.$loading.finish(), 500)
    // this.$show()
    // this.getAboutUs()
    // console.log(this.$seo)
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  data() {
    return {
      title: '首页',
      content: '快马鲜生',
    }
  },
  computed:{
    ...mapGetters({
      name:'user/name'
    })
  },
  methods: {
    jump() {
      this.$router.push({ name: 'user-id', params: { id: '222' } })
    },

    async getAboutUs() {
      let res = await this.$api.getAboutUs({})
      console.log(res)
    },
  },
}
</script>
<style scoped lang="scss">
</style>

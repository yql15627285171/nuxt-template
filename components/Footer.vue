<template>
  <div class="footer">
    <div class="foot-container container">
      <div class="info-block">
        <!-- 关于我们 -->
        <div>
          <h4>关于我们</h4>
          <ul>
            <li
              class="pointer"
              v-for="item in about_us_lists"
              :key="item.id"
              @click="toAboutUsPage(item)"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
        <!-- 帮助中心 -->
        <div>
          <h4>帮助中心</h4>
          <ul>
            <li
              class="pointer"
              v-for="item in help_center_lists"
              :key="item.twoCategoryId"
              @click="toHelpCenter(item)"
            >
              {{ item.helperCategory }}
            </li>
          </ul>
        </div>
        <!-- 协议条款 -->
        <div>
          <h4>协议条款</h4>
          <ul>
            <li
              class="pointer"
              v-for="item in protocols"
              :key="item.id"
              @click="toAboutUsPage(item)"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
        <!-- 联系我们 -->
        <div>
          <h4>联系我们</h4>
          <ul v-if="contactInfo">
            <li>电话：{{ contactInfo.contactPhone }}</li>
            <li>
              客户服务：{{ contactInfo.customePhone }}
            </li>
            <li>邮箱：{{ contactInfo.contactEmail }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
// 不会触发，只会在路由页面的vue中触发
//   async asyncData({ app }) {
//     console.log(123)
//   },
  data() {
    return {
      about_us_lists: [],
      help_center_lists: [],
      terms_list: [],
      protocols: [],
      contactInfo:null,
    }
  },
  created() {
      this.getAboutUs();
      this.getHelpCenter();
      this.getContactInfo()
  },
  methods: {
    async getAboutUs() {
      let { data } = await this.$api.getAboutUs({})
      this.about_us_lists = data
    },
    async getHelpCenter() {
      let { data } = await this.$api.getHelpCenter()
      this.help_center_lists = data.slice(0, 4);
    },
    async getContactInfo() {
      let { data } = await this.$api.getContactInfo({})
      this.contactInfo = data
    },
    toAboutUsPage(item) {},
    toHelpCenter(item) {},
    toAboutUsPage(item) {},
  },
}
</script>
<style lang="scss" scoped>
$bc_color: $theme_color;
.footer {
  background: $bc_color;
  height: 240px;
  padding-top: 28px;
  .foot-container {
    display: flex;
    justify-content: space-between;
    padding: 0 72px;
    .info-block {
      display: flex;
      h4 {
        font-size: 18px;
        font-weight: 400;
        // color: #3e3f40;
        color: #fff;
        margin-bottom: 20px;
        font-weight: bolder;
      }
      ul {
        min-width: 200px;
        li {
          list-style: none;
          font-size: 16px;
          line-height: 24px;
          // color: #6f7071;
          color: #fff;
          margin-bottom: 12px;
        }
      }
    }

    .code-block {
      display: flex;
      justify-content: flex-end;
      .code1,
      .code2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 70px;
        img {
          height: 146px;
          width: 146px;
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>
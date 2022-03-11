// 全局方法
import Vue from 'vue'
let show = () => console.log("全局方法")
Vue.prototype.$show = show

// 全局过滤器
import * as filters from '../assets/filters/index'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 全局指令
import direc1 from "../assets/directives/direc1"
Vue.directive("direc1", direc1)


// minxins
Vue.mixin({
  methods: {
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [{
          hid: 'keywords',
          name: 'keywords',
          content
        }].concat(payload)
      }
    }
  }
})

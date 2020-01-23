// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入element-ui
import ElementUI from 'element-ui'
// import MyServerHttp from '@/plugins/http.js'
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import moment from 'moment'

import router from './router'

// // 1.全局引用 (调用视频播放插件)
// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
// // 调用视频播放插件
// Vue.use(VueVideoPlayer)
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video


Vue.config.productionTip = false

// 默认每次刷新都进入登录页面 router.push('/login')
// 使用vue的插件
// Vue.use(MyServerHttp)
Vue.use(ElementUI)

// 时间过滤器
Vue.filter("fmtdate", (v) => {
  return moment(v).format("YYYY-MM-DD HH:mm");
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

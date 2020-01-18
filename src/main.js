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


import router from './router'

Vue.config.productionTip = false

router.push('/login')
// 使用vue的插件
// Vue.use(MyServerHttp)
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

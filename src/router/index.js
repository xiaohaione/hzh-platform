import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import Users from '@/components/users/users.vue'
import video from '@/components/videos/video.vue'
import addVideo from '@/components/videos/addVideo.vue'




Vue.use(Router)

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      meta: {
        level: 1
      },
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      meta: {
        level: 1
      },
      component: Home,
      children: [
        {
          name: 'users',
          path: '/users',
          component: Users
        },
        {
          name: 'video',
          path: '/video',
          component: video
        },
        {
          name: 'addVideo',
          path: '/addVideo',
          component: addVideo
        }
      ]
    }

  ]
})

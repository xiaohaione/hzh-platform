import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import {
  getToken,
  getSuName
} from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // base_url
  timeout: 15000, // 请求超时时间
  withCredentials: true,
  headers: {
    'Content-Type': 'application/jsonp;charset=utf-8',
    "token": localStorage.getItem("token"),
    "username": localStorage.getItem("username")
  },

  // params:添加到url的请求字符串中的，用于get请求。
  params: {},
  transformRequest: [function (data = {}) {
    if (getToken()) {
      data = Object.assign(data, {
        token: getToken()
      })
    }
    data = JSON.stringify(data)
    return data
  }]

})

const cacheList = {
  // '/common/getCityList': true,
  // '/tutorial/getType': true,
  // '/channel/getAllChannel': true
}



// // request拦截器
// service.interceptors.request.use(config => {
//   config.params.suName = getSuName()
//   config.params.token = getToken()
//   if (store.getters.token) {
//     // config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//   }
//   return config
// }, error => {
//   console.log(error) // for debug
//   Promise.reject(error)
// })

// // response拦截器
// service.interceptors.response.use(
//   response => {
//     /**
//      * code为非0是抛错 可结合自己业务进行修改
//      */
//     const res = response.data
//     if (res.code === undefined) {
//       return response
//     } else if (res.name === 'verifyPasswd') {
//       return Promise.reject(res)
//     } else if (Number(res.code) !== 0) {
//       if (Number(res.code) === 8) {
//         Message({
//           message: res.message,
//           type: 'error',
//           duration: 3 * 1000
//         })
//         store.dispatch('FedLogOut').then(() => {
//           location.reload() // 为了重新实例化vue-router对象 避免bug
//         })
//       } else if (Number(res.code) === 9) {
//         MessageBox.confirm('登录超时，你可以重新登录', '提示', {
//           confirmButtonText: '重新登录',
//           cancelButtonText: '取消',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('FedLogOut').then(() => {
//             location.reload() // 为了重新实例化vue-router对象 避免bug
//           })
//         })
//       } else if (Number(res.code) === 100 || Number(res.code) === 101 || Number(res.code) === 102 || Number(res.code) === 103) {
//         // do nth
//       } else {
//         Message({
//           message: res.message || res.msg || res.desc,
//           type: 'error',
//           duration: 3 * 1000
//         })
//       }

//       return Promise.reject(res)
//     } else {
//       const url = response.config.url.replace('api/', '')
//       if (cacheList[url]) {
//         sessionStorage.setItem(url, JSON.stringify(response.data))
//       }
//       return response.data
//     }
//   },
//   error => {
//     // console.log('err in request' + error) // for debug
//     Message({
//       message: error.message || error.msg || error.desc,
//       type: 'error',
//       duration: 3 * 1000
//     })
//     return Promise.reject(error)
//   }
// )

export default service

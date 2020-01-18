import request from '@/utils/request.js'

const login = {
  login(username, password) {
    return request({
      url: '/sys/login/login',
      method: 'get',
      params: {
        username: username,
        password: password
      }
    })
  },


  // // 获取用户权限菜单
  // getPerMenu(data) {
  //   return request({
  //     url: '/sys/index/getMenu',
  //     method: 'POST',
  //     data
  //   })
  // }
}


export default login

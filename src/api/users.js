import request from '@/utils/request.js'

const userSearch = {
  userSearch(nickName, page, limit, token, username, password) {
    return request({
      url: '/user/page/list',
      method: "get",
      params: {
        nickName: nickName,
        page: page,
        limit: limit,
        token: token,
        username: username
      }
    })
  }
}


export default userSearch

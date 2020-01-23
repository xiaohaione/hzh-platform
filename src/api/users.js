import request from '@/utils/request.js'

const userSearch = {
  userSearch(nickName, page, limit) {
    return request({
      url: '/user/page/list',
      method: "get",
      params: {
        nickName: nickName,
        page: page,
        limit: limit
      }
    })
  }
}


export default userSearch

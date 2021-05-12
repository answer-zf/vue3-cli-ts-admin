import request from '@/utils/request'
import { store } from '@/store/index'

const api = {
  // 接口
  books: '/auth/oauth/books',
}

export function getBooks(): any {
  return request({
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Basic YWRtaW46MTIzNDU2',
    },
    url: api.books,
    method: 'get',
    data: { token: store.state.layout.token.ACCESS_TOKEN },
  })
}

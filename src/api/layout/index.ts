import request from '@/utils/request'
import { AxiosResponse } from 'axios'
import { store } from '@/store/index'
import { IMenubarList } from '@/type/store/layout'

const api = {
  // 接口
  login: '/auth/oauth/token',
  getUser: '/getUser',
  getRouterList: '/getRoute',
}

// 接口
// export function login(param: any): Promise<AxiosResponse<any>> {
//   return request({
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: 'Basic YWRtaW46MTIzNDU2',
//     },
//     url: api.login,
//     method: 'post',
//     data: param,
//   })
// }

export function login(param: any): any {
  return request({
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Basic YWRtaW46MTIzNDU2',
    },
    url: api.login,
    method: 'post',
    data: param,
  })
}

interface IGetuserRes {
  name: string
  role: Array<string>
}

export function getUser(): Promise<AxiosResponse<IResponse<IGetuserRes>>> {
  return request({
    url: api.getUser,
    method: 'get',
    data: { token: store.state.layout.token.ACCESS_TOKEN },
  })
}
export function getRouterList(): Promise<AxiosResponse<IResponse<Array<IMenubarList>>>> {
  return request({
    url: api.getRouterList,
    method: 'get',
    data: { token: store.state.layout.token.ACCESS_TOKEN },
  })
}

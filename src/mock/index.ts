import { mock } from 'mockjs'
import { login, setToken } from '@/mock/response'

interface IReq {
  body: any
}

mock('/auth/oauth/token', 'post', (req: IReq) => {
  const username = req.body.get('username')
  const password = req.body.get('password').toString()
  if (login(username, password)) {
    return mock({
      code: 200,
      msg: '登陆成功',
      access_token: setToken(username), // eslint-disable-line
    })
  }
  return mock({
    code: 401,
    msg: '用户名或密码错误',
    access_token: '', // eslint-disable-line
  })
})

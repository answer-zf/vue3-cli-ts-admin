import { user } from '@/mock/data/user'

export const setToken = function(name: string): string {
  return `token_${name}_token`
}

export const checkToken = function(token: string): string {
  const match = token.match(/^token_([\w|\W]+?)_token/)
  return match ? match[1] : ''
}

export const login = function(name: string, pwd: string): boolean {
  return user.findIndex((v: any) => v.name === name && v.pwd === pwd) !== -1
}

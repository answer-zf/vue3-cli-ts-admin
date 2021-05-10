import { user } from '@/mock/data/user'
import { books } from '@/mock/data/books'

export const setToken = (name: string): string => {
  return `token_${name}_token`
}

export const checkToken = (token: string): string => {
  const match = token.match(/^token_([\w|\W]+?)_token/)
  return match ? match[1] : ''
}

export const login = (name: string, pwd: string): boolean => {
  return user.findIndex((v: any) => v.name === name && v.pwd === pwd) !== -1
}

// -------- books --------

export { books }

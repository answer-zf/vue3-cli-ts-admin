import { useBookListProvide, useBookListInject } from './book'

// 使用模块化统一管理 上下文
export const useProvide = () => {
  useBookListProvide()
}

export { useBookListInject }

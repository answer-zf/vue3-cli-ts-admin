import { IMenubarList } from '@/type/store/layout'
import { listToTree } from '@/utils/index'
import { store } from '@/store/index'

const modules = require.context('@/views', true, /\.vue$/)

const componentsIngore: Array<string> = ['Login', 'Workplace'] // 忽略的页面

const components: IObject<() => Promise<typeof import('*.vue')>> = {
  Layout: ((() => import('@/layout/index.vue')) as unknown) as () => Promise<typeof import('*.vue')>,
}

modules.keys().forEach(key => {
  const nameMatch = key.match(/^\.\/(.*)\/(.*)\.vue/)
  if (!nameMatch) return
  let [, , moduleKey] = nameMatch
  const moduleUrl = key.replace(/^.\//, 'views/')

  // 如果页面以Index命名，则使用父文件夹作为name
  if (nameMatch[2] === 'index') {
    const nameSplit = nameMatch[1].split('/')
    moduleKey = nameSplit[nameSplit.length - 1]
  }

  if (!componentsIngore.includes(moduleKey)) {
    // import 不能动态识别传入的字符串，需要通过指定编译路径，在根据字符串找到该组件
    components[moduleKey] = ((() => import(`@/${moduleUrl}`)) as unknown) as () => Promise<typeof import('*.vue')>
    // components[moduleKey] = ((() => import(`../${moduleUrl}`)) as unknown) as () => Promise<typeof import('*.vue')>
  }
})

const asyncRouter: Array<IMenubarList> = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: components['404'],
    meta: {
      title: 'NotFound',
      icon: '',
      hidden: true,
    },
    redirect: {
      name: '404',
    },
  },
]

export const generatorDynamicRouter = (data: Array<IMenubarList>): void => {
  const routerList: Array<IMenubarList> = listToTree(data, 0)
  asyncRouter.forEach(v => routerList.push(v))
  const f = (data: Array<IMenubarList>, pData: IMenubarList | null) => {
    for (let i = 0, len = data.length; i < len; i++) {
      const v: IMenubarList = data[i]
      if (typeof v.component === 'string') v.component = components[v.component]
      if (!v.meta.permission || (pData && v.meta.permission.length === 0)) {
        v.meta.permission = pData && pData.meta && pData.meta.permission ? pData.meta.permission : []
      }
      if (v.children && v.children.length > 0) {
        f(v.children, v)
      }
    }
  }
  f(routerList, null)
  store.commit('layout/setRoutes', routerList)
}

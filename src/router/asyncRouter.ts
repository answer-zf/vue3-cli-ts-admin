import { IMenubarList } from '@/type/store/layout'
import { listToTree } from '@/utils/index'
import { store } from '@/store/index'

const components: IObject<() => Promise<typeof import('*.vue')>> = {
  Layout: ((() => import('@/layout/index.vue')) as unknown) as () => Promise<typeof import('*.vue')>,
  404: ((() => import('@/views/ErrorPage/404.vue')) as unknown) as () => Promise<typeof import('*.vue')>,
  Workplace: ((() => import('@/views/Dashboard/Workplace.vue')) as unknown) as () => Promise<typeof import('*.vue')>,
  MerchantList: ((() => import('@/views/Merchant/MerchantList.vue')) as unknown) as () => Promise<
    typeof import('*.vue')
  >,
}

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

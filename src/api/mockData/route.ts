export const routeData = [
  {
    id: 5,
    parentId: 0,
    name: 'Merchant',
    path: '/Merchant',
    component: 'Layout',
    redirect: '/Merchant/MerchantList',
    meta: { title: '商户系统', icon: 'el-icon-phone', alwaysShow: true, permission: [] },
  },
  {
    id: 50,
    parentId: 5,
    name: 'MerchantList',
    path: '/Merchant/MerchantList',
    component: 'MerchantList',
    meta: { title: '商户管理', icon: 'el-icon-goods', permission: [] },
  },
]

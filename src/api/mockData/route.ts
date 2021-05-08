export const routeData = [
  {
    id: 1,
    parentId: 0,
    name: 'Cookie',
    path: '/Cookie',
    component: 'Layout',
    redirect: '/Cookie/Context',
    meta: { title: '尝鲜库', icon: 'el-icon-video-camera-solid', alwaysShow: true, permission: [] },
  },
  {
    id: 10,
    parentId: 1,
    name: 'Context',
    path: '/Cookie/Context',
    component: 'Context',
    meta: { title: '状态管理', icon: 'el-icon-connection', permission: [] },
  },
]

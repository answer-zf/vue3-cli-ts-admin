# zf-admin

已完成登录页的改造，后续侧边栏和框架的搭建需要接口的配合才能完成。

```js
[
  // 获取 路由列表的 接口返回的数据需要如下字段
  {
    component: 'Layout', // 有子集显示均 layout,最底层的显示相应的模块名称
    id: 2,
    meta: { title: '项目管理', icon: 'el-icon-phone', permission: [] },
    name: 'Project',
    parentId: 0,
    path: '/Project',
    redirect: '/Project/ProjectList' // 默认第一个子孙项
  },
  {
    component: 'ProjectList',
    id: 20,
    meta: { title: '项目列表', icon: 'el-icon-goods', permission: [] },
    name: 'ProjectList',
    parentId: 2,
    path: '/Project/ProjectList'
  }
]
```

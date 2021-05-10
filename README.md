# 后台管理系统

## 技术栈

- vue3 + ts + vue-cli + element plus

## 当前进度

- 配合 实际的 后台接口 以完成登录页面，以及使用 静态数据 做页面渲染

## 登录配置修改

1. `src\api\layout\index.ts` 中修改 请求接口，注意框架内的 ts 类型
2. `.env` 中 配置 后台接口 根路由
3. `src\store\module\layout.ts` 中的 actions 的操作是实际请求处理操作
4. `src\utils\request.ts` 可以修改 headers 的 token 命名以及错误请求的统一处理（项目中未处理，需要与后端约定）
5. localStorage 存储 token 的键：必须以对象的形式传递，否则不能做登录保持

## 页面框架修改

1. `src\layout\index.vue` 侧边栏logo 修改
   1. layout.menubar.status === 0 || layout.menubar.status === 2 代表最大屏幕时 显示
   2. layout.menubar.status === 1 表示缩进侧边栏时 显示
2. 由于项目 使用静态数据 模拟渲染，添加侧边栏 和项目页需要如下处理
   1. `src\api\mockData\route.ts` 中添加配置项
      - 可以用 `src\api\mockData\routeback.ts` 做参考
   2. 根据 配置项的路径添加相应的文件夹和文件 动态路由根据 `@/views` 目录下的 文件夹和文件 生成动态路由

ps. 本项目只是项目框架基底，使用静态数据，自定义改造的部分还需要自行处理

***

2021 05 07 更新

## 添加环境

> vue3 中 测试环境（test），使用路由加载组件过程中会出现异常，固弃用在 测试环境 、和生产环境区分 mock 与实际接口的方案
>
> 采用自定义环境的方式进行环境的区分，提升开发效率

### 开发环境 - 连接本地 mock

> 运行：`npm start / npm run dev-local`

- 在测试环境中，使用 mock 做接口请求的模拟
- mock 中的接口与实际开发的接口相同，可无缝衔接实际的接口
- 由于 项目接口约定用 formData 进行传参，在mock中的登录采用的formData参数进行校验。

### 开发环境

> 运行：`npm run dev-remote`

- 在已有后端接口的前提下运行即可，代码不需要修改。

### 生产打包

> 运行：`npm run build`

## 尝鲜功能

- 采用 react 中的 context useReducer 的思想进行状态管理

- 在 vue3 中 用 hook + provide 、inject 实现

- 核心代码：

  - `@/context/`
  - `@/App.vue`
  - `@/views/Cookie/Context.vue`

## 数据

- mock 数据

  - `@/mock/data/`

- 静态数据
  
  - context 尝鲜测试数据：`@/api/bookData`
  - router: `@/api/mockData`

## 补充

### 组件相关注意事项

- 由于项目中，路由所直接关联的组件（eg. `/Home/HomePage => @/views/Home/HomePage.vue`）
- 在 `@/layout/content.vue` 中使用 `keep-alive` 组件做动态组件的缓存.
- 在这些组件中 template 下必须有且仅有一个标签。

## 借鉴

- `https://github.com/hsiangleev/element-plus-admin`
- `https://github.com/sl1673495/vue-bookshelf`

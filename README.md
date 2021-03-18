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
5. localStorage 存储 token 的键： 'token_zfPro723673' 做自定义命名，不要命名 'token'，以免与其他项目冲突

## 页面框架修改

1. `src\layout\index.vue` 侧边栏logo 修改
   1. layout.menubar.status === 0 || layout.menubar.status === 2 代表最大屏幕时 显示
   2. layout.menubar.status === 1 表示缩进侧边栏时 显示
2. 由于项目 使用静态数据 模拟渲染，添加侧边栏 和项目页需要如下处理
   1. `src\api\mockData\route.ts` 中添加配置项
      - 可以用 `src\api\mockData\routeback.ts` 做参考
   2. `src\router\asyncRouter.ts` 中添加路由配置，与静态数据配置一致
   3. 在对应的配置目录中添加文件目录

ps. 未做动态处理，使用静态数据可以清除框架结构，本项目只是项目框架基地，自定义改造的部分还需要自行处理

借鉴： `https://github.com/hsiangleev/element-plus-admin`

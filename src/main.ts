import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from '@/store/index'

import '@/permission'

// 全局样式
import '@/assets/css/tailwind.css'
import '@/assets/css/index.css'

// 全局导入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css'

// 仅在测试环境中使用 mock
process.env.VUE_APP_CURRENTMODE === 'dev-local' && require('@/mock')

console.log('%c!<-------------------- 开发环境 s -------------------->', 'color:blue')
console.log(process.env.VUE_APP_ENV)
console.log('%c!<-------------------- 开发环境 e -------------------->', 'color:blue')

const app = createApp(App)

// 在 vue 中挂载 ElementPlus
app.use(ElementPlus)

app.use(store)
app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from '@/store/index'

import '@/permission'

// 全局样式
import '@/assets/css/index.css'

// 全局导入 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css'
const app = createApp(App)

// 在 vue 中挂载 ElementPlus
app.use(ElementPlus)

app.use(store)
app.use(router)
app.mount('#app')

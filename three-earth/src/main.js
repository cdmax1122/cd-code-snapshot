/**
 * main.js - 应用入口
 * 挂载 Vue + Pinia
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')

import { createApp } from 'vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/global.css'
import App from './App.vue'

const app = createApp(App)


app.use(router).use(ElementPlus)
app.mount('#app')
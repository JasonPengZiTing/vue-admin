
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
//引入路由
import router from './router'
//引入仓库
import pinia from './stores'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import 'virtual:svg-icons-register'
import gloalComponent from './components'
import '@/styles/index.scss';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(gloalComponent)



// axios({
//   url: '/api/user/login',
//   method: "post",
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   data: {
//     username: 'admin',
//     password: '111111'
//   }
// }).then(res => {
//   console.log('登录响应：', res)
// }).catch(err => {
//   console.error('登录错误：', err)
// })


app.mount('#app')

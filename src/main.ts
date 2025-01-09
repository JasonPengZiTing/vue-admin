

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import 'virtual:svg-icons-register'
import gloalComponent from './components'
import '@/styles/index.scss';
import add from '@/mock/user.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus,{
  locale: zhCn
})
app.use(gloalComponent)

import axios from "axios";
console.log(add);


// axios({
//   url:'api/user/login',
//   method:'post',
//   data:{
//     username:'admin',
//     password:'111111'
//   }
// })

app.mount('#app')

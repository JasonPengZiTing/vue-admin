import { createRouter, createWebHistory } from 'vue-router'
//引入常量路由
import { constantRoute } from '@/router/routers'

const router = createRouter({
  //路由模式
  history: createWebHistory(import.meta.env.BASE_URL),
  //路由信息
  routes: constantRoute,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})
//暴露路由
export default router

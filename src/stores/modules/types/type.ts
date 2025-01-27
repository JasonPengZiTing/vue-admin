//引入路由
import type { RouteRecordRaw } from 'vue-router'
//引入用户信息类型
import type { userInfo } from '@/api/user/type'
//定义小仓库存储的类型
export interface userStore {
  token: string | null
  menuRoutes: RouteRecordRaw[]
  userInfo: userInfo | null
}


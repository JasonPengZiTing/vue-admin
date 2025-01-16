//引入路由
import type { RouteRecordRaw } from 'vue-router'
//定义小仓库存储的类型
export interface userStore {
  token: string | null
  menuRoutes: RouteRecordRaw[]
}


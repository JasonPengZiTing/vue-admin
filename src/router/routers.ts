import { Hide } from '@element-plus/icons-vue';

//对外暴露常量路由
export const constantRoute = [{
  path: '/home',
  name: 'home',
  component: () => import('../views/home/index.vue'),
  meta: {
    title: '首页',
    icon: 'HomeFilled'
  }
},
{
  path: '/',
  name: 'layout',
  component: () => import('../layout/index.vue'),
  meta: {
    title: '首页',
    icon: 'HomeFilled'
  },
  hidden: false,
  children: [
    {
      path: '/home',
      name: '首页',
      component: () => import('../views/home/index.vue'),
      meta: {
        title: '首页',
        icon: 'HomeFilled'
      },
      hidden: true
    }
  ]
},
{
  path: '/login',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../views/login/index.vue'),
  meta: {
    title: '登录',
    icon: 'HomeFilled'
  },
  hidden: true
},
{
  path: '/404',
  name: '404',
  component: () => import('../views/404/index.vue'),
  meta: {
    title: '404',
    icon: 'HomeFilled'
  },
  hidden: true
},
{
  path: '/:pathMatch(.*)*',
  redirect: '404',
  meta: {
    title: '任意路由',
    icon: 'HomeFilled'
  },
  hidden: true
}
]

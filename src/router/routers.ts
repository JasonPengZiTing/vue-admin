
//对外暴露常量路由
export const constantRoute = [
  //   {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../views/home/index.vue'),
  //   meta: {
  //     title: '首页',
  //     icon: 'HomeFilled',
  //     hidden: true
  //   },

  // },

  {
    //登录成功后展示的页面
    path: '/',
    name: 'layout',
    component: () => import('../layout/index.vue'),
    meta: {
      title: '',
      icon: 'HomeFilled',
      hidden: false
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: '首页',
        component: () => import('../views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          hidden: false
        },

      }
    ]
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('../views/screen/index.vue'),
    meta: {
      title: '大屏展示',
      icon: 'Platform',
      hidden: false
    },
  },
  {
    path: '/acl',
    name: 'acl',
    component: () => import('../layout/index.vue'),
    meta: {
      title: '权限管理',
      icon: 'Lock',
      hidden: false
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        name: 'user',
        component: () => import('../views/acl/user/index.vue'),
        meta: {
          title: '用户管理',
          icon: 'User',
          hidden: false
        },
      },
      {
        path: '/acl/role',
        name: 'role',
        component: () => import('../views/acl/role/index.vue'),
        meta: {
          title: '角色管理',
          icon: 'UserFilled',
          hidden: false
        },
      },
      {
        path: '/acl/permission',
        name: 'permission',
        component: () => import('../views/acl/permission/index.vue'),
        meta: {
          title: '菜单管理',
          icon: 'Menu',
          hidden: false
        },
      }
    ]
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../layout/index.vue'),
    meta: {
      title: '商品管理',
      icon: 'Shop',
      hidden: false
    },
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        name: 'trademark',
        component: () => import('../views/product/trademark/index.vue'),
        meta: {
          title: '品牌管理',
          icon: 'GoodsFilled',
          hidden: false
        },
      },
      {
        path: '/product/attr',
        name: 'attr',
        component: () => import('../views/product/attr/index.vue'),
        meta: {
          title: '属性管理',
          icon: 'ChromeFilled',
          hidden: false
        },
      },
      {
        path: '/product/spu',
        name: 'spu',
        component: () => import('../views/product/spu/index.vue'),
        meta: {
          title: 'SPU管理',
          icon: 'HelpFilled',
          hidden: false
        },
      },
      {
        path: '/product/sku',
        name: 'sku',
        component: () => import('../views/product/sku/index.vue'),
        meta: {
          title: 'SKU管理',
          icon: 'HomeFilled',
          hidden: false
        },
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
      icon: 'HomeFilled',
      hidden: true
    },

  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404/index.vue'),
    meta: {
      title: '404',
      icon: 'HomeFilled',
      hidden: true
    },

  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
    meta: {
      title: '任意路由',
      icon: 'HomeFilled',
      hidden: true
    },

  }
]

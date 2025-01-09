import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ()=> import('../views/home/index.vue'),
    },
    {
      path: '/',
      name: 'layout',
      component: ()=> import('../views/home/index.vue'),
    },
    {
      path: '/login',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login/index.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: ()=> import('../views/404/index.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '404'
    }
  ],
  scrollBehavior(){
    return{
      left:0,
      top:0
    }
  }
})

export default router

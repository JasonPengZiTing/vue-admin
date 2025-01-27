import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '@/router'
//获取用户相关的小仓库内部token数据,去判断用户是否登录成功
import useUserStore from '@/stores/modules/user'
//引入大仓库
import pinia from '@/stores'



//全局守卫:项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  //开始进度条
  nprogress.start()
  //获取token判断是否需要登录
  const token = userStore.token
  //const token = localStorage.getItem('TOKEN')
  console.log("----------------" + token)
  if (token) {
    //登录成功之后不能访问登录页面
    if (to.path == '/login') {
      next('/')
    } else {
      //如果有用户信息
      if (userStore.userInfo) {
        console.log(userStore.userInfo);

        console.log(11111111111111111111111111111111111);

        //获取用户信息
        // const result = await userStore.getUserInfo()
        // console.log("++++++++++++++++++++++++" + result);
        //放行
        next()
      } else {
        try {
          //获取用户信息
          await userStore.getUserInfo()
          next()
        } catch (error) {
          //获取用户信息失败，token过期则跳转到登录页面
          //token过期，则清除用户信息
          userStore.logout()
          next({ path: '/login', query: { redirect: to.path } })
          console.log("++++++++++++++++++++++++" + error);

        }

      }
    }
  } else {
    console.log('需要登录')
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

//路由后置守卫
router.afterEach((to, from) => {
  //结束进度条
  nprogress.done()
})





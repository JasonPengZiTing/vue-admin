//创建用户小仓库
import { defineStore } from 'pinia'
//引入用户接口
import { reqLogin, reqLogout, reqUserInfo } from '@/api/user'
//引入用户参数类型定义
import { type userInfoReponseData, type loginResponseData, type loginFormData } from '@/api/user/type'
//引入小仓库存储的类型
import { type userStore } from './types/type'
//引入本地存储方法
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
//引入路由
import { constantRoute } from '@/router/routers'

//创建用户小仓库
const useUserStore = defineStore('', {

  //小仓库存数据的地方
  state: (): userStore => {
    return {
      //token
      token: GET_TOKEN(),
      //存储路由信息
      menuRoutes: constantRoute,
      //存储用户信息
      userInfo: {}


    }
  },
  //异步|写逻辑的地方
  actions: {
    //定义用户登录方法
    async userLogin(data: loginFormData) {
      const result: loginResponseData = await reqLogin(data);
      //登录请求:成功200->token
      //登录请求:失败201->登录失败错误的信息
      console.log('完整的返回值：', JSON.stringify(result, null, 2));
      if (result.code === 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = (result.data.token as string);
        //本地存储持久化存储一份
        SET_TOKEN(result.data.token as string);
        //登录成功后获取用户信息
        await this.getUserInfo()
        //能保证当前async函数返回一个成功的promise
        return 'ok';
      } else {
        return Promise.reject(new Error("登录失败"));
      }

    },
    //定义退出登录的方法
    async logout() {
      //发送退出登录请求,暂时没有
      //const result: any = await reqLogout();
      //if (result.code === 200) {
      //清除pinia仓库中的数据
      this.token = null
      //清除用户信息
      this.userInfo = null
      //清除本地存储的token
      REMOVE_TOKEN()
      return 'ok'
      // } else {
      //   return Promise.reject(new Error("退出登录失败"));
      // }
    },
    //定义获取用户信息的方法
    async getUserInfo() {
      const result: userInfoReponseData = await reqUserInfo();
      if (result.code === 200) {
        console.log('获取到的用户信息', result.data.checkUser);
        //将获取到的用户信息存储到pinia仓库中
        this.userInfo = result.data.checkUser
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error("获取用户信息失败"));
      }
    }
  },
  getters: {

  }
})

//对外暴露获取小仓库方法
export default useUserStore;

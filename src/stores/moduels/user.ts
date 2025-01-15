//创建用户小仓库
import { defineStore } from 'pinia'
//引入用户接口
import { reqLogin, reqLogout, reqUserInfo } from '@/api/user'
import { da } from 'element-plus/es/locales.mjs'
//引入用户参数类型定义
import { type userInfoReponseData, type loginResponseData, type loginFormData } from '@/api/user/type'
//引入小仓库存储的类型
import { type userStore } from './types/type'
//引入本地存储方法
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'

//创建用户小仓库
const useUserStore = defineStore('', {

  //小仓库存数据的地方
  state: (): userStore => {
    return {
      token: GET_TOKEN()
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
        //能保证当前async函数返回一个成功的promise
        return 'ok';
      } else {
        return Promise.reject(new Error("登录失败"));
      }

    }
  },
  getters: {

  }
})

//对外暴露获取小仓库方法
export default useUserStore;

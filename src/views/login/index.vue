<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12"> </el-col>
      <el-col :span="12">
        <div class="login_form">
          <h1>Hello</h1>
          <h3>欢迎来到xxxx</h3>
          <el-form :rules="rules" :model="loginFrom" ref="loginFroms">
            <el-form-item prop="username">
              <el-input :prefix-icon="User" v-model="loginFrom.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                :prefix-icon="Lock"
                type="password"
                show-password
                v-model="loginFrom.password"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loading"
                type="primary"
                class="login_btn"
                size="default"
                @click="login"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { ElNotification } from 'element-plus'
//引入用户相关的小仓库
import useUserStore from '@/stores/modules/user'
//引入路由
import { useRouter } from 'vue-router'
//引入时间函数
import { getTime } from '@/utils/time'

//获取用户小仓库
const useStore = useUserStore()
//引入路由
const router = useRouter()
//获取定义表单数据
const loginFrom = reactive({ username: 'admin', password: '111111' })
//定义变量控制按钮加载效果
const loading = ref(false)
//定义表单数据
const loginFroms = ref()
//点击登录方法
const login = async () => {
  //表单验证
  await loginFroms.value.validate()
  //表单验证通过后，开始加载效果
  loading.value = true
  try {
    const result = await useStore.userLogin(loginFrom)
    console.log(JSON.stringify(result, null, 2))
    //登录成功后跳转到主页
    router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `Hi,${getTime()}好，欢迎回来`,
    })
  } catch (error) {
    console.log(error)
    //登录失败加载效果消息
    loading.value = false
    //登录失败的提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value.length < 5) {
    callback(new Error('用户名长度至少5个字符'))
  } else if (value.length > 10) {
    callback(new Error('用户名长度最多10个字符'))
  } else {
    callback()
  }
}

//定义校验规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    //自定义校验规则长度
    { trigger: 'change', validator: validateUsername },
    //{ min: 5, max: 10, message: '用户名长度在5到10个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度在6到15个字符', trigger: 'blur' },
  ],
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    top: 40vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    width: 80%;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }
    h3 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }
    .login_btn {
      width: 100%;
      color: white;
    }
  }
}
</style>

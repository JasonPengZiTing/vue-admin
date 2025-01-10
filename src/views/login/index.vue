<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12"> </el-col>
      <el-col :span="12">
        <div class="login_form">
          <h1>Hello</h1>
          <h3>欢迎来到xxxx</h3>
          <el-form>
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
import useUserStore from '@/stores/moduels/user'
let useStore = useUserStore()

let loginFrom = reactive({ username: 'admin', password: '111111' })
//定义变量控制按钮加载效果
let loading = ref(false)

//点击登录方法
let login = () => {
  loading.value = true
  try {
    let result = useStore.userLogin(loginFrom)
    console.log(result)
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
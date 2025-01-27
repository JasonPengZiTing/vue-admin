<template>
  <div>我是登录成功后首页</div>
</template>

<script setup lang="ts">
//引入组合式api的声明周期函数
import { onMounted } from 'vue'
//引入用户仓库查询用户信息
import useUserStore from '@/stores/modules/user'
const userStore = useUserStore()
//当页面加载时，查询用户信息
onMounted(() => {
  console.log('我是登录成功后首页')
  //userStore.getUserInfo()
})
</script>

<style></style>

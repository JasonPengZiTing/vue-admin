<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'

import request from './utils/request'
import { onMounted } from 'vue'

onMounted(() => {
  request({
    url: '/api/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((res) => {
    console.log(res)
  })
  console.log(request)
})
</script>

<template>
  <router-view></router-view>

  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary" :icon="Edit">Primary</el-button>
    <el-button type="success" :icon="Message">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
  <svg-icon name="system" color="red" width="200px" height="200px"></svg-icon>
</template>

<style scoped lang="scss">
// .mb-4 {
//   color: variable.$color-l;
// }
</style>

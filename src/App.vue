<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

import request from './utils/request'
import {onMounted} from 'vue'
import { log } from 'console'

// onMounted(()=>{
  
//   request({
//     url:'/user/login',
//     method:'post',
//     data:{
//       username:'admin',
//       password:'111111'
//     }
//   }).then(res=>{
//     console.log(res);
    
//   })
//   console.log(request);
// })

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

  <div class="demo-pagination-block">
    <div class="demonstration"></div>
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :size="size"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <svg-icon name="system" color="red" width="200px" height="200px"></svg-icon>
</template>

<style scoped lang="scss">
  
  .mb-4{
    color: variable.$color-l;
  }
</style>

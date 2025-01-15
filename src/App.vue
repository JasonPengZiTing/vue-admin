<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'

import request from './utils/request'
import { onMounted } from 'vue'

// onMounted(() => {
//   request({
//     url: 'user/login',
//     method: 'post',
//     data: {
//       username: 'admin',
//       password: '111111',
//     },
//   }).then((rep) => {
//     console.log(rep)
//   })
//   //console.log(request)
// })
</script>

<template>
  <router-view></router-view>
  <svg-icon name="system" color="red" width="200px" height="200px"></svg-icon>
</template>

<style scoped lang="scss">
// .mb-4 {
//   color: variable.$color-l;
// }
</style>

<template>
  <template v-for="item in userStore.menuRoutes" :key="item.path">
    <template v-if="!item.hidden">
      <!-- 没有子路由 -->
      <template v-if="!item.children">
        <el-menu-item :index="item.path">
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
      <!-- 有子路由且长度大于2 -->
      <template v-if="item.children && item.children.length > 1">
        <el-sub-menu :index="item.path">
          <template #title>
            <el-icon><component :is="item.meta.icon"></component></el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <template v-for="item in item.children" :key="item.path">
            <el-menu-item :index="item.path">
              <el-icon><component :is="item.meta.icon"></component></el-icon>
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </template>
  </template>
</template>
<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
const userStore = useUserStore()
</script>
<style scoped lang="scss">
</style>

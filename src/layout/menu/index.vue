<template>
  <template v-for="item in userStore.menuRoutes" :key="item.path">
    <template v-if="!item.meta.hidden">
      <!-- 没有子路由 -->
      <template v-if="!item.children">
        <el-menu-item :index="item.path">
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
      <!-- 有子路由且长度等于1 -->
      <template v-if="item.children && item.children.length === 1">
        <el-menu-item :index="item.children[0].path" @click="handleClick(item.children[0].path)">
          <el-icon><component :is="item.children[0].meta.icon"></component></el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </el-menu-item>
      </template>
      <!-- 有子路由且长度大于1 -->
      <template v-if="item.children && item.children.length > 1">
        <el-sub-menu :index="item.path">
          <template #title>
            <el-icon><component :is="item.meta.icon"></component></el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <template v-for="itemchild in item.children" :key="itemchild.path">
            <el-menu-item :index="itemchild.path" @click="handleClick(itemchild.path)">
              <el-icon><component :is="itemchild.meta.icon"></component></el-icon>
              <span>{{ itemchild.meta.title }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </template>
  </template>
</template>
<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
const handleClick = (path: string) => {
  router.push(path)
  console.log(path)
}
</script>
<style scoped lang="scss">
</style>

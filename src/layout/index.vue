<template>
  <div class="layout_container">
    <div class="sidebar_container" :class="{ fold: settingStore.isFold }">
      <!-- logo -->
      <Logo />
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar_container">
        <!-- 菜单组件 -->
        <el-menu
          :collapse="settingStore.isFold"
          class="el-menu-vertical-demo"
          :default-active="$router.currentRoute.value.path"
        >
          <Menu />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 头部 -->
    <div class="header_container" :class="{ fold: settingStore.isFold }">
      <Tabbar></Tabbar>
    </div>
    <!-- 主内容组件 -->
    <div class="main_container" :class="{ fold: settingStore.isFold }">
      <Main></Main>
    </div>
  </div>
</template>
<script setup lang="ts">
//引入路由
import { useRouter } from 'vue-router'
// 引入logo组件
import Logo from './logo/Logo.vue'
// 引入菜单组件
import Menu from './menu/index.vue'
//引入main组件
import Main from './main/index.vue'
//引入tabbar组件
import Tabbar from './tabbar/index.vue'
//引入setting小仓库
import useSettingStore from '@/stores/modules/setting'

const settingStore = useSettingStore()

const $router = useRouter()
console.log($router.currentRoute.value.path)
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .sidebar_container {
    width: variable.$sidebar-width;
    height: 100%;
    background-color: rgb(96, 102, 86);
    .scrollbar_container {
      width: 100%;
      height: calc(100vh - variable.$logo-height);
    }
    transition: all 0.3s;
    &.fold {
      width: variable.$sidebar-fold-width;
    }
  }

  .header_container {
    position: fixed;
    top: 0;
    left: calc(variable.$sidebar-width + 1px);
    width: calc(100% - variable.$sidebar-width);
    height: variable.$header-height;
    transition: all 0.3s;
    //background-color: blue;
    &.fold {
      left: calc(variable.$sidebar-fold-width + 1px);
      width: calc(100% - variable.$sidebar-fold-width);
    }
  }

  .main_container {
    position: absolute;
    top: variable.$header-height;
    left: calc(variable.$sidebar-width + 1px);
    width: calc(100% - variable.$sidebar-width);
    height: calc(100vh - variable.$header-height);
    //background-color: yellow;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      left: calc(variable.$sidebar-fold-width + 1px);
      width: calc(100% - variable.$sidebar-fold-width);
    }
  }
}
</style>


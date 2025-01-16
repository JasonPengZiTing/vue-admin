<template>
  <div class="layout_container">
    <div class="sidebar_container">
      <!-- logo -->
      <Logo />
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar_container">
        <el-menu class="el-menu-vertical-demo">
          <Menu />
          <!-- <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <template v-slot:title>
              <span>导航一</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <span>导航二</span>
          </el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>权限管理</template>
            <el-menu-item index="2-4-1">用户管理</el-menu-item>
            <el-menu-item index="2-4-2">角色管理</el-menu-item>
            <el-menu-item index="2-4-3">菜单管理</el-menu-item>
          </el-sub-menu> -->
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="header_container">456</div>
    <div class="main_container">789</div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/Logo.vue'
import Menu from './menu/index.vue'
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .sidebar_container {
    width: variable.$sidebar-width;
    height: 100%;
    background-color: greenyellow;
    .scrollbar_container {
      width: 100%;
      height: calc(100vh - variable.$logo-height);
    }
  }

  .header_container {
    position: fixed;
    top: 0;
    left: calc(variable.$sidebar-width + 1px);
    width: calc(100% - variable.$sidebar-width);
    height: variable.$header-height;
    //background-color: blue;
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
  }
}
</style>


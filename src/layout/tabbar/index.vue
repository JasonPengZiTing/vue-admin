<template>
  <el-row>
    <el-col :span="12">
      <div class="left_container">
        <!-- 折叠和展开事件 -->
        <el-icon @click="handleExpand">
          <!-- 动态组件 -->
          <component :is="settingStore.isFold ? Expand : Fold" />
        </el-icon>
        <!-- 面包屑 -->
        <!-- 点击菜单面包屑动态显示标题和图标 -->
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item
            v-for="item in $router.currentRoute.value.matched"
            :key="item.path"
            v-show="item.meta.title"
            :to="item.path"
          >
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-col>
    <!-- 右边setting -->
    <el-col :span="12">
      <div class="right_container">
        <el-button :icon="Refresh" circle @click="handleRefresh" />
        <el-button :icon="FullScreen" circle />
        <el-button :icon="Setting" circle />
        <img
          src="../../../public/logo.png"
          alt=""
          srcset=""
          style="width: 24px; height: 24px; margin: 0px 10px"
        />
        <!-- 下拉菜单 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { ArrowRight, Refresh, FullScreen, Setting } from '@element-plus/icons-vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { ref } from 'vue'
import useSettingStore from '@/stores/modules/setting'
import { useRouter } from 'vue-router'
const router = useRouter()
//获取setting小仓库
const settingStore = useSettingStore()
// 折叠和展开事件
const handleExpand = () => {
  settingStore.isFold = !settingStore.isFold
}
//刷新事件
const handleRefresh = () => {
  settingStore.isRefresh = !settingStore.isRefresh
  console.log('刷新按钮状态', settingStore.isRefresh)
}
</script>
<style scoped lang="scss">
.el-row {
  height: 100%;
  .el-col {
    height: 100%;
  }
}
.left_container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .el-icon {
    margin-left: 10px;
    margin-right: 10px;
  }
}
.right_container {
  display: flex;
  width: 100%;
  height: 100%;
  // background-color: blue;
  align-items: center;
  justify-content: flex-end;
}
</style>

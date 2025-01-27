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
        <el-button :icon="FullScreen" circle @click="handleFullScreen" />
        <el-button :icon="Setting" circle />
        <img
          :src="user.avatar"
          alt=""
          srcset=""
          style="width: 24px; height: 24px; margin: 0px 10px"
        />
        <!-- 下拉菜单 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ user.username }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
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
import { reactive, ref, computed, onMounted } from 'vue'
import useSettingStore from '@/stores/modules/setting'
import { useRouter } from 'vue-router'
import useUserStore from '@/stores/modules/user'
//引入路由
const $router = useRouter()
//获取setting小仓库
const settingStore = useSettingStore()
// 折叠和展开事件
const handleExpand = () => {
  settingStore.isFold = !settingStore.isFold
}
//刷新事件
const handleRefresh = () => {
  settingStore.isRefresh = !settingStore.isRefresh
}
//从仓库中获取用户信息
const userInfo = useUserStore()
//组件挂载时获取用户信息
onMounted(async () => {
  await userInfo.getUserInfo()
})
//获取用户信息展示在页面
const user = computed(() => userInfo.userInfo)
//退出登录事件
const handleLogout = () => {
  //获取当前路由地址，方便退出登录后跳转到退出之前的页面
  const currentPath = $router.currentRoute.value.path
  userInfo.logout()
  //路由跳转到登录页面
  $router.push({ path: '/login', query: { redirect: currentPath } })
  console.log('退出登录')
}

//全屏事件
const handleFullScreen = () => {
  //DOM对象的一个属性，用来判断获取当前是否全屏
  const element = document.fullscreenElement
  if (!element) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
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

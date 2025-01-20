<template>
  <!-- 路由视图动画 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="isRefresh" />
    </transition>
  </router-view>
</template>
<script setup lang="ts">
import useSettingStore from '@/stores/modules/setting'
import { watch, nextTick, ref } from 'vue'
const settingStore = useSettingStore()
//控制当前组件是否销毁重建
const isRefresh = ref(true)
//监听刷新按钮状态
watch(
  () => settingStore.isRefresh,
  () => {
    console.log('监听到刷新按钮状态', settingStore.isRefresh)
    //点击刷新按钮，组件销毁
    isRefresh.value = false
    //刷新按钮状态设置为true
    nextTick(() => {
      isRefresh.value = true
    })
  }
)
</script>
<style scoped lang="scss">
// 写动画效果淡入
// .fade-enter-from {
//   opacity: 0;
// }
// 只设置淡入动画
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

// .fade-enter-to {
//   opacity: 1;
// }
</style>

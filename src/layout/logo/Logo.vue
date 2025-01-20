<template>
  <div class="logo_container">
    <img :src="logoPath" alt="logo" />
    <span v-show="!settingStore.isFold">{{ projectName }}</span>
  </div>
</template>
<script setup lang="ts">
import { logoPath, projectName } from '@/setting'
import useSettingStore from '@/stores/modules/setting'
const settingStore = useSettingStore()
</script>
<style scoped lang="scss">
.logo_container {
  width: 100%;
  height: variable.$logo-height;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  img {
    width: 30px;
    height: 30px;
  }
  span {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
    white-space: nowrap;
  }
}
</style>

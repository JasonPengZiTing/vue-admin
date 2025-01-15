<template>
  <div class="logo_container">
    <img :src="logoPath" alt="logo" />
    <p>{{ projectName }}</p>
  </div>
</template>
<script setup lang="ts">
import { logoPath, projectName } from '@/setting'
</script>
<style scoped lang="scss">
.logo_container {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    height: 30px;
  }
  p {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
  }
}
</style>

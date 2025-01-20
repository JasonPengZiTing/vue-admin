//创建layout折叠设置小仓库
import { defineStore } from 'pinia'

//创建折叠设置小仓库
const useSettingStore = defineStore('setting', {
  state: () => {
    return {
      //折叠状态
      isFold: false,
      //刷新按钮状态
      isRefresh: false
    }
  }
})
//暴露出去全局使用
export default useSettingStore

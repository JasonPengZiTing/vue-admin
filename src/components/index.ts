import SvgIcon from '@/components/SvgIcon.vue'
import type { App } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const components = { SvgIcon, ...ElementPlusIconsVue };

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
      console.log(key);

    })
  }
}

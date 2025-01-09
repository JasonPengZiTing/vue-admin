import SvgIcon from '@/components/SvgIcon.vue'
import type { App, Component } from 'vue';
const components = { SvgIcon };
export default {
    install(app: App) {
        Object.keys(components).forEach((key: string) => {
            app.component(key, components[key]);
            console.log(key);
            
        })
    }
}
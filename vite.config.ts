import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

export default ({command})=>{
  return{
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // javascriptEnabled: true,
          additionalData: '@use "@/styles/variable.scss";',
        },
      },
    },
  }
}

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueJsx(),
//     vueDevTools(),
//     createSvgIconsPlugin({
//       // Specify the icon folder to be cached
//       iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
//       // Specify symbolId format
//       symbolId: 'icon-[dir]-[name]',
//     }),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         // javascriptEnabled: true,
//         additionalData: '@import "@/styles/variable.scss";',
//       },
//     },
//   },
// })

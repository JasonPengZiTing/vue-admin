import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { fa } from 'element-plus/es/locales.mjs'

export default ({ command }: ConfigEnv) => {
  return {
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
        mockPath: './src/mock',
        localEnabled: true,
        supportTs: true,
        logger: true,
        enable: true,
        watchFiles: true,
        prodEnabled: false,
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

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-auto-import/resolvers'

import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueSetupExtend(), AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    // element plus 按需导入
    resolvers: [ElementPlusResolver({
      importStyle: 'sass'
    })],
    esLintrc: {
      enabled: true
    },
  }), Components([
    {
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })]
    }
  ])],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`
      }
    }
  }
})

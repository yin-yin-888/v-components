import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import VueJsx from '@vitejs/plugin-vue-jsx'
// import eslint from 'vite-plugin-eslint'
import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx() // 如果需要
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:18:40
 * @FilePath: \algorithm-visualization\apps\website\vite.config.ts
 * @Description:
 *
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vitePluginForArco } from '@arco-plugins/vite-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginForArco()],
  build: {
    outDir: 'build'
  }
  // base: 'algorithm-visualization' // 为/仓库名/
})

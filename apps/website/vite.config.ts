import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vitePluginForArco } from '@arco-plugins/vite-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginForArco(),
  ],
  base: ' https://calculus9.github.io/algorithm-visualization/' // 为/仓库名/
})

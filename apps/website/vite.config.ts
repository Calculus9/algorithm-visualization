import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vitePluginForArco } from '@arco-plugins/vite-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginForArco(),
  ],
  // base: '/Calculus9.github.io/' // 为/仓库名/
})

import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './index.html'
  },

  output: {
    assetPrefix: '/algorithm-visualization/',
    distPath: {
      root: 'dist'
    }
  },
  source: {
    entry: {
      index: './src/main.tsx'
    },
    transformImport: [
      {
        libraryName: '@arco-design/web-react',
        libraryDirectory: 'es',
        camelToDashComponentName: false,
        style: 'css'
      },
      {
        libraryName: '@arco-design/web-react/icon',
        libraryDirectory: 'react-icon',
        camelToDashComponentName: false
      }
    ]
  }
})

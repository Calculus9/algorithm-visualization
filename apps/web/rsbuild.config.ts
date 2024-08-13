import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './index.html'
  },
  // base: ' https://calculus9.github.io/', // 为/仓库名/
  output: {
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

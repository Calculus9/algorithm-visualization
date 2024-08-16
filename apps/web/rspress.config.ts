import { defineConfig } from 'rspress/config'

export default defineConfig({
  // 文档根目录
  root: 'docs',
  lang: 'zh',
  // source: {
  //   entry: {
  //     index: './src/main.tsx'
  //   },
  //   transformImport: [
  //     {
  //       libraryName: '@arco-design/web-react',
  //       libraryDirectory: 'es',
  //       camelToDashComponentName: false,
  //       style: 'css'
  //     },
  //     {
  //       libraryName: '@arco-design/web-react/icon',
  //       libraryDirectory: 'react-icon',
  //       camelToDashComponentName: false
  //     }
  //   ]
  // },
  locales: [
    {
      lang: 'en',
      // 导航栏切换语言的标签
      label: 'English',
      title: 'Modern.js',
      description: 'Modern.js 文档框架'
    },
    {
      lang: 'zh',
      // 导航栏切换语言的标签
      label: '简体中文',
      title: 'Modern.js',
      description: 'Rspress'
    }
  ],
  themeConfig: {
    locales: [
      {
        lang: 'en',
        outlineTitle: 'ON THIS Page',
        label: ''
      },
      {
        lang: 'zh',
        outlineTitle: '大纲',
        label: ''
      }
    ]
  }
})

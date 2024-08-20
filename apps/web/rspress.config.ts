import { defineConfig } from 'rspress/config'

export default defineConfig({
  // 文档根目录
  root: 'docs',
  lang: 'zh',
  logoText: '[̲̅A̲̲̅̅l̲̲̅̅V̲̲̅̅i̲̲̅̅s̲̅',
  // logo: 'https://avatars.githubusercontent.com/u/56892468?s=200&v=4',
  icon: 'https://avatars.githubusercontent.com/u/56892468?s=200&v=4',
  title: 'AlVis',
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
    darkMode: false,
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

import { defineConfig } from 'rspress/config'

export default defineConfig({
  // 文档根目录
  root: 'docs',
  lang: 'zh',
  logoText: '[̲̅A̲̲̅̅l̲̲̅̅V̲̲̅̅i̲̲̅̅s̲̅',
  icon: 'https://avatars.githubusercontent.com/u/56892468?s=200&v=4',
  title: 'AlVis',
  locales: [
    {
      lang: 'en',
      // 导航栏切换语言的标签
      label: 'English'
    },
    {
      lang: 'zh',
      // 导航栏切换语言的标签
      label: '简体中文'
    }
  ],
  themeConfig: {
    darkMode: false,
    locales: [
      {
        lang: 'en',
        outlineTitle: 'Outline',
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

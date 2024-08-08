/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-08 15:56:14
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-08 16:45:12
 * @FilePath: \algorithm-visualization\apps\website\src\store\create.ts
 * @Description:
 *
 */
import { create } from 'zustand'

interface PageState {
  page: string
  setPage: (page: string) => void
}

const usePageStore = create<PageState>()(set => ({
  page: '0',
  setPage: page => set(() => ({ page: page }))
}))

interface ThemeState {
  themeColor: string
  setThemeColor: (color: string) => void
}

const useThemeStore = create<ThemeState>()(set => ({
  themeColor: '#F7BA1E',
  setThemeColor: color => set(() => ({ themeColor: color }))
}))

export { usePageStore, useThemeStore }

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-08 15:56:14
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-08-08 22:51:40
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

interface LngState {
  lng: number
  setLng: (lng: number) => void
}

const useLngStore = create<LngState>()(set => ({
  lng: 0,
  setLng: lng => set(() => ({ lng: lng }))
}))

export { usePageStore, useThemeStore, useLngStore }

/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2026-01-12 14:39:23
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2026-01-12 14:44:36
 * @FilePath: /algorithm-visualization/apps/web/src/home/useThrottle.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCallback, useEffect, useRef } from 'react'

export const useThrottle = (fn, delay, dep) => {
  const { current } = useRef({ fn, timer: null })

  useEffect(() => {
    current.fn = fn
  }, dep)

  return useCallback((...args) => {
    if (current.timer) return
    current.timer = setTimeout(() => {
      current.fn(...args)
      current.timer = null
    }, delay)
  }, dep)
}

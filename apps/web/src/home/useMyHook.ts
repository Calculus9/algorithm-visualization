/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2025-08-26 20:10:46
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2026-01-12 14:59:08
 * @FilePath: /algorithm-visualization/apps/web/src/home/useMyHook.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 */
import { Ref, useCallback, useRef, useState } from 'react'

export const useMyHook = (totalValue: number, delay = 1000) => {
  const [counter, setCounter] = useState(totalValue)
  const timer = useRef<any>(null)

  const clearTimer = () => {
    clearInterval(timer.current)
    timer.current = null
  }
  const start = useCallback(() => {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(() => {
      setCounter(counter => {
        if (counter === 0) {
          clearTimer()
          return 0
        }
        return counter - 1
      })
    }, delay)
  }, [])

  const pause = useCallback(() => {
    clearTimer()
  }, [])

  const reset = useCallback(() => {
    clearTimer()
    setCounter(totalValue)
  }, [])
  return [counter, start, pause, reset]
}

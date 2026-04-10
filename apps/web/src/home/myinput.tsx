/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2026-01-13 22:01:02
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2026-01-13 22:15:23
 * @FilePath: /algorithm-visualization/apps/web/src/home/myinput.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { forwardRef } from 'react'
import { useImperativeHandle, useRef } from 'react'

const MyInput = forwardRef(({ props }: { props: any }, ref) => {
  let data: number = 1

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          ref.current.focus()
        },
        test1(x: number) {
          console.log(x)

          console.log()
          return x + data
        }
      }
    },
    []
  )
  return <input style={{ backgroundColor: 'red' }} type='text' ref={ref} />
})
export default MyInput

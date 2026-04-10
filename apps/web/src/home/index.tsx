/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2026-01-13 22:16:27
 * @FilePath: \algorithm-visualization\apps\website\src\home\index.tsx
 * @Description:
 *
 */
import React, { useCallback, useRef, useState } from 'react'
import HomeTop from '../common/top/index.tsx'
import HomeContent from './content/index.tsx'
import { AlVisEditor } from '../index.ts'
import { Divider, Layout } from '@arco-design/web-react'
import { useMyHook } from './useMyHook.ts'
import { useDebounce } from './useDebounce'
import { useThrottle } from './useThrottle.ts'
import MyInput from './myinput.tsx'
const { Content } = Layout
export const Home = () => {
  const ref = useRef<any>()
  // const [timeLeft, start, pause, reset] = useMyHook(10, 3000, () => {
  //   console.log('执行')
  // })
  const [counter, start, pause1, reset1] = useMyHook(5, 1000)
  const [counter2, start1, pause2, reset2] = useMyHook(5, 2000)

  // const [count, setCount] = useState(0)
  const handleClick = () => {
    // ref.current.focus()
    let res = ref.current.test1(11)
    console.log('res', res)
  }

  return (
    <>
      <Layout>
        <HomeTop />
        111
        <MyInput props={{}} ref={ref} />
        <button onClick={handleClick}>点击</button>
        222
        <div style={{ display: 'flex', justifyContent: 'space-between', width: 200 }}>
          <button onClick={start}>开始1</button>
          <button onClick={start1}>开始2</button>
          <button onClick={pause1}>暂停</button>
          <button onClick={pause2}>暂停2</button>
          {/*  <button onClick={reset}>重置</button>
          <button onClick={handleClcik}>防抖test</button> */}
          {/* <div>{count}</div> */}
        </div>
        <div>{counter}</div>
        <div>{counter2}</div>
        {/* <div>{timeLeft}</div> */}
        <Content>
          <Divider />

          <div style={{ padding: '0 200px' }}>
            <AlVisEditor />
          </div>
          <HomeContent />
        </Content>
      </Layout>
    </>
  )
}

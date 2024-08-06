/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:30:32
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-06 20:13:33
 * @FilePath: \algorithm-visualization\apps\website\src\App.tsx
 * @Description: project entry
 */
import React from 'react'

import MenuRoute from './home/top/pageHeader'

function App(props: { children: any }) {
  const { children } = props
  return (
    <div>
      <MenuRoute />
      {children}
    </div>
  )
}

export default App

/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:30:32
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 10:48:23
 * @FilePath: \algorithm-visualization\apps\website\src\App.tsx
 * @Description: project entry
 */
import React from 'react'

function App(props: { children: any }) {
  const { children } = props

  return (
    <div>
      {/* <MenuRoute /> */}
      <div
        style={{
          padding: '0 120px',
          // backgroundColor: titleBachgroundColor,
          marginBottom: 10
        }}
      >
        {children}
      </div>

      <div
        style={{ textAlign: 'center' }}
      >{`Copyright ©${new Date().getFullYear()} Calculus9.jingyu`}</div>
    </div>
  )
}

export default App

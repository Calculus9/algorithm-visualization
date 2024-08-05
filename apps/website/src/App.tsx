/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:30:32
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 18:32:34
 * @FilePath: \algorithm-visualization\apps\website\src\App.tsx
 * @Description: project entry
 */
import React from 'react'

import { AlVisEditor } from './editorVis'

function App() {
  return (
    <>
      <div style={{ background: 'var(--color-fill-2)' }}>
        <AlVisEditor />
        {/* <Layout>
          <Header>
            <div
              style={{
                background: 'var(--color-fill-2)'
              }}
            >
              <div className='menu-demo'>
                <Menu
                  mode='horizontal'
                  defaultSelectedKeys={['Home']}
                  onClickMenuItem={(key: string) => {
                    setMenu(key)
                  }}
                >
                  {MenuList?.map(d => {
                    return <MenuItem key={d}>{d}</MenuItem>
                  })}
                </Menu>
              </div>
            </div>
          </Header>
        </Layout>
        <Editor text='Monorepo搭建成功' />
        <Render text='render接入成功' />


        <ChartD3 text='d3包' />
        <Home />
        <Api /> */}
      </div>
    </>
  )
}

export default App

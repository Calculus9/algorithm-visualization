/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:30:32
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-29 10:15:55
 * @FilePath: /algorithm-visualization/apps/website/src/App.tsx
 * @Description: project entry
 */
import { Layout } from '@arco-design/web-react'
import { Menu } from '@arco-design/web-react'
import { MenuList } from './constant'
import { useEffect, useState } from 'react'
import React from 'react'
import { Home } from './home'

import Editor from '@mono/editor'
import VisChart from './chart'
// import Render from '@mono/render'
// import ChartD3 from '@mono/chart-d3'

const MenuItem = Menu.Item
const Header = Layout.Header

function App() {
  const [curMenu, setMenu] = useState('Home')

  useEffect(() => {}, [curMenu])

  return (
    <>
      <div style={{ background: 'var(--color-fill-2)' }}>
        <Layout>
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
        <div id='vchart'></div>
        <Editor text='Monorepo搭建成功' />
        {/* <Render text='render接入成功' /> */}

        <VisChart />
        {/* <ChartD3 text='d3包' /> */}
        <Home />
        {/* <Api /> */}
      </div>
    </>
  )
}

export default App

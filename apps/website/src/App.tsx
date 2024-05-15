/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:30:32
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-15 14:33:54
 * @FilePath: /algorithm-visualization/apps/website/src/App.tsx
 * @Description: project entry
 */
import { Button, Layout } from '@arco-design/web-react'
import { Menu } from '@arco-design/web-react'
import { MenuList, initData, schema } from './constant'
import { useCallback, useEffect, useState } from 'react'
import React from 'react'
import { Home } from './home'

import Editor from '@mono/editor'
// import Render from '@mono/render'
import { BarChart } from '@mono/chart-visactor'
// import ChartD3 from '@mono/chart-d3'
import { parseSchema2VChart } from '@mono/data-structure'

const MenuItem = Menu.Item
const Header = Layout.Header

function App() {
  const [curMenu, setMenu] = useState('Home')
  const [data, setData] = useState(initData)
  const [test, setTest] = useState<number>(0)
  useEffect(() => {}, [curMenu])

  const handleClick = useCallback(
    () => {
      setTest(test + 1)
      setData(parseSchema2VChart(data[0].values, schema, test))
    },
    [data, test]
  )

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
        <Editor text='Monorepo搭建成功' />
        {/* <Render text='render接入成功' /> */}
        <Button shape='round' type='outline' size='large' onClick={handleClick}>
          test
        </Button>
        <BarChart data={data} />
        {/* <ChartD3 text='d3包' /> */}
        <Home />
        {/* <Api /> */}
      </div>
    </>
  )
}

export default App

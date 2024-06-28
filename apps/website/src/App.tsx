/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:30:32
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-06-25 20:20:47
 * @FilePath: \algorithm-visualization\apps\website\src\App.tsx
 * @Description: project entry
 */
import React, { useEffect, useState } from 'react'

import VisChart from './chart'
import MonacoEditor from '@mono/editor'
// import Render from '@mono/render'
// import ChartD3 from '@mono/chart-d3'
import { Grid } from '@arco-design/web-react'
const Row = Grid.Row
const Col = Grid.Col
function App() {
  const [code, setCode] = useState('')

  const onChange = (code: string) => {
    console.log(code)

    setCode(code)
  }

  return (
    <>
      <div style={{ background: 'var(--color-fill-2)' }}>
        <Row className='grid-demo' style={{ marginBottom: 16 }}>
          <Col span={11}>
            <VisChart code={code} />
          </Col>
          <Col span={12}>
            <MonacoEditor onChange={onChange} />
          </Col>
        </Row>

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

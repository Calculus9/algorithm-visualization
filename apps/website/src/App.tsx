/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:30:32
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-29 16:45:09
 * @FilePath: \algorithm-visualization\apps\website\src\App.tsx
 * @Description: project entry
 */
import React, { useState } from 'react'

import ALVisChart from './chart'
import MonacoEditor from '@alvis/editor/src/index'
import { Grid } from '@arco-design/web-react'
const Row = Grid.Row
const Col = Grid.Col
function App() {
  const [code, setCode] = useState('') //localStorage.getItem("storage")

  const onChange = (code: string) => {
    setCode(code)
    localStorage.setItem('storage', code)
  }

  return (
    <>
      <div style={{ background: 'var(--color-fill-2)' }}>
        <Row className='grid-demo' style={{ marginBottom: 16 }}>
          <Col span={11}>
            <ALVisChart code={code} />
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

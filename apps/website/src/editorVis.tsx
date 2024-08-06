/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-05 18:30:53
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-08-06 22:47:24
 * @FilePath: \algorithm-visualization\apps\website\src\editorVis.tsx
 * @Description:
 * This is the file of monaco editor and visualization chart.
 */

import MonacoEditor from '@alvis/editor/src'
import { Grid } from '@arco-design/web-react'
import { useState } from 'react'
import AlVisChart from './chart'
import React from 'react'
import { DEFAULTCODE } from './constant'
const Row = Grid.Row
const Col = Grid.Col

const AlVisEditor = () => {
  const [code, setCode] = useState(DEFAULTCODE) //

  const onChange = (code: string) => {
    setCode(code)
    localStorage.setItem('storage', code)
  }
  return (
    <Row style={{ marginBottom: 16 }}>
      <Col span={11}>
        <AlVisChart code={code} />
      </Col>

      <Col span={13} style={{ paddingLeft: 10 }}>
        <MonacoEditor onChange={onChange} />
      </Col>
    </Row>
  )
}
export { AlVisEditor }

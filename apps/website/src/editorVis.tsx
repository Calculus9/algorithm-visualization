/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-05 18:30:53
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 18:35:50
 * @FilePath: \algorithm-visualization\apps\website\src\editorVis.tsx
 * @Description:
 * This is the file of monaco editor and visualization chart.
 */

import MonacoEditor from '@alvis/editor/src'
import { Grid } from '@arco-design/web-react'
import { useState } from 'react'
import AlVisChart from './chart'
import React from 'react'
const Row = Grid.Row
const Col = Grid.Col

const AlVisEditor = () => {
  const [code, setCode] = useState('') //localStorage.getItem("storage")

  const onChange = (code: string) => {
    setCode(code)
    localStorage.setItem('storage', code)
  }
  return (
    <Row style={{ marginBottom: 16 }}>
      <Col span={11}>
        <AlVisChart code={code} />
      </Col>
      <Col span={12}>
        <MonacoEditor onChange={onChange} />
      </Col>
    </Row>
  )
}
export { AlVisEditor }

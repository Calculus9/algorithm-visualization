/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-05 18:30:53
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 15:08:41
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
  const [code, setCode] = useState(DEFAULTCODE)

  const onChange = (code: string) => {
    setCode(code)
  }
  return (
    <Row style={{ marginBottom: 16 }}>
      <Col span={11}>
        <div style={{ height: '560px' }}>
          <AlVisChart id='chart' code={code} />
        </div>
      </Col>

      <Col span={13} style={{ paddingLeft: 10, height: '560px' }}>
        <MonacoEditor onChange={onChange} code={code} />
      </Col>
    </Row>
  )
}
export { AlVisEditor }

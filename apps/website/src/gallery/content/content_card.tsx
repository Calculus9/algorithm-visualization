import { Card, Modal } from '@arco-design/web-react'
import React, { useState } from 'react'
import AlVisChart from '../../chart'
import MonacoEditor from '@alvis/editor/src'
import { DEFAULTCODE } from '../../constant'
import { defaultAlgorithms } from '../contanst'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-09 11:53:01
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 15:08:54
 * @FilePath: \algorithm-visualization\apps\website\src\gallery\content\content_card.tsx
 * @Description:
 *
 */
export const ContentCard = (props: { name: string; type: number; num: number }) => {
  const { name, type, num } = props
  const [visible, setVisible] = useState(false)
  const [code, setCode] = useState(defaultAlgorithms?.[type]?.[num])

  const onChange = (code: string) => {
    setCode(code)
  }
  return (
    <div>
      <Card
        style={{ marginBottom: 10, marginRight: 10 }}
        title={name}
        extra={<div onClick={() => setVisible(true)}>More</div>}
      >
        <div style={{ width: 360, height: 400 }}>
          <AlVisChart id={name} code={code} />
        </div>
      </Card>
      <Modal
        style={{ width: 1200 }}
        title={name}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ width: 400 }}>
            <AlVisChart id={`${name}-chart`} code={code} />
          </div>
          <div style={{ width: 700 }}>
            <MonacoEditor onChange={onChange} code={code} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:11:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 12:30:00
 * @FilePath: \algorithm-visualization\apps\website\src\chart.tsx
 * @Description: We will parse code to schema in this file and call the vischart
 */

import React, { useEffect, useState } from 'react'
import { ISchemaProps } from '@alvis/schema/src'
import { ChartVis } from '@alvis/render/src/index'
import { convertCode2Schema } from '@alvis/schema/src/service/buildSchema'
import { DEFAULTCODE } from './constant'

interface IProps {
  code: string
  id: string
}

const AlVisChart = (props: IProps) => {
  const { code = DEFAULTCODE, id = 'chart' } = props
  const [schema, setSchema] = useState<ISchemaProps | null>(null)

  useEffect(() => {
    if (code.length === 0) return

    setSchema(convertCode2Schema(code))
  }, [code])

  return (
    <div style={{ height: '100%' }}>
      <ChartVis id={id} schema={schema} />
    </div>
  )
}
export default AlVisChart

/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:11:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-13 14:07:43
 * @FilePath: \algorithm-visualization\apps\website\src\chart.tsx
 * @Description: We will parse code to schema in this file
 */

import React, { useEffect, useState } from 'react'
import { ISchemaProps } from '@alvis/schema/src'
import { ChartVis } from '@alvis/render/src/index'
import { convertCode2Schema } from '@alvis/schema/src/service/buildSchema'

interface IProps {
  code: string
}

const VisChart = (props: IProps) => {
  const { code = '' } = props
  const [schema, setSchema] = useState<ISchemaProps | null>(null)

  useEffect(() => {
    if (code.length === 0) return
    setSchema(convertCode2Schema(code))
  }, [code])

  return <ChartVis schema={schema} />
}
export default VisChart

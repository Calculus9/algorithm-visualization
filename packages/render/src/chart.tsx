/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:11:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-02 21:01:04
 * @FilePath: \algorithm-visualization\apps\website\src\chart.tsx
 * @Description: We will parse code to schema in this file
 */

import React, { useEffect, useState } from 'react'
import { parseCode2Schema } from '@alvis/schema/src/index'
import { ISchema } from '@alvis/schema/src/types'
import { RenderChart } from './index'

interface IProps {
  code: string
}

const VisChart = (props: IProps) => {
  const { code = '' } = props
  const [schema, setSchema] = useState<ISchema>({})

  useEffect(() => {
    if (code.length === 0) return
    setSchema(parseCode2Schema(code))
  }, [code])

  return <RenderChart schema={schema} />
}
export default VisChart

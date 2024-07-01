/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:11:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-01 18:55:56
 * @FilePath: \algorithm-visualization\apps\website\src\chart.tsx
 * @Description: the chart configuration
 */

import React, { useEffect } from 'react'
import { parseCode2Schema } from '@alvis/schema/src/index'
import { renderChart } from '../../../packages/render/src/index'

interface IProps {
  code: string
}

const VisChart = (props: IProps) => {
  const { code = '' } = props

  useEffect(() => {
    if (code.length === 0) return
    const schema = parseCode2Schema(code)
    renderChart(schema)
  }, [code])

  return (
    <div>
      <div id='chart'></div>
    </div>
  )
}
export default VisChart

import { ISchema } from '../../schema/src/types'
import React, { useEffect, useState } from 'react'
import { renderChart } from './utils'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 19:20:23
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-11 16:06:23
 * @FilePath: \algorithm-visualization\packages\render\src\index.tsx
 * @Description: Here is RenderChart component, it receive the schema and then render.
 */

export const ChartVis = (props: { schema: ISchema }) => {
  const { schema } = props

  useEffect(() => {
    renderChart(schema)
  }, [schema])

  return (
    <div>
      <div id='chart'></div>
    </div>
  )
}

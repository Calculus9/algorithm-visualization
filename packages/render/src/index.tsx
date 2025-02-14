import { ISchemaProps } from '@alvis/schema/src'
import React, { useEffect } from 'react'
import { getChart } from './utils'
import { ChartLibType } from '@alvis/web/src/constant'
import { IChartProps } from '@alvis/charts'
import { D3Chart } from '@alvis/charts/chart-d3/src'
import { ActionExec } from '@alvis/exec/src'
import VChart from '@visactor/vchart'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 19:20:23
 * @LastEditors: 1441211576@qq.com huangjingyu@kuaishou.com
 * @LastEditTime: 2025-02-13 15:53:08
 * @FilePath: \algorithm-visualization\packages\render\src\index.tsx
 * @Description: Here is RenderChart component, it receive the schema and then render.
 */

export const ChartVis = (props: { schema: ISchemaProps | null; id: string }) => {
  const { schema, id } = props

  useEffect(() => {
    console.log(schema)
    if (!schema) return

    const { dataStructureType } = schema

    const [, chart, actionExecutor]: [IChartProps, VChart | D3Chart, ActionExec] = getChart(
      schema,
      dataStructureType === 'stack' ? ChartLibType.d3 : ChartLibType.visactor,
      id
    )
    const exe = async () => {
      for (let i = 0; i < schema.actions.length; i++) {
        await actionExecutor.exeNext()
      }
    }
    exe()

    return () => {
      chart.release()
    }
  }, [schema])

  return (
    <div style={{ height: '100%' }}>
      <div style={{ height: '100%' }} id={id}></div>
    </div>
  )
}

import { ISchemaProps } from '@alvis/schema/src'
import React, { useEffect } from 'react'
import { getChart } from './utils'
import { ChartLibType } from '@alvis/website/src'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 19:20:23
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 12:29:49
 * @FilePath: \algorithm-visualization\packages\render\src\index.tsx
 * @Description: Here is RenderChart component, it receive the schema and then render.
 */

export const ChartVis = (props: { schema: ISchemaProps | null; id: string }) => {
  const { schema, id } = props

  useEffect(() => {
    if (!schema) return
    const [, vchart, actionExecutor] = getChart(schema, ChartLibType.visactor, id)
    const exe = async () => {
      for (let i = 0; i < schema.actions.length; i++) {
        await actionExecutor.exeNext()
      }
    }
    exe()

    return () => {
      vchart.release()
    }
  }, [schema])

  return (
    <div style={{ height: '100%' }}>
      <div style={{ height: '100%' }} id={id}></div>
    </div>
  )
}

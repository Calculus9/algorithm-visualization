import { ISchemaProps } from '@alvis/schema/src'
import React, { useEffect } from 'react'
import { getChart } from './utils'
import { ChartLibType } from '@alvis/website/src'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 19:20:23
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 15:52:14
 * @FilePath: \algorithm-visualization\packages\render\src\index.tsx
 * @Description: Here is RenderChart component, it receive the schema and then render.
 */

export const ChartVis = (props: { schema: ISchemaProps | null }) => {
  const { schema } = props
  const id = 'chart'

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
    <div>
      <div id={id}></div>
    </div>
  )
}

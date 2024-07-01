/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:11:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-01 18:06:58
 * @FilePath: \algorithm-visualization\apps\website\src\chart.tsx
 * @Description: the chart configuration
 */

import React, { useEffect } from 'react'
import { getChart } from './utils'
import { ChartLibType } from './constant'
import { ISchema } from '@alvis/data-structure/src/datatype'
import { MonoArray } from '@alvis/data-structure/src/mono/array'
interface IProps {
  code: string
}

const VisChart = (props: IProps) => {
  const { code = '' } = props

  // 写一个组件接收schema
  useEffect(() => {
    if (code.length === 0) return
    const func = new Function('MonoArray', code)
    const schema = func(MonoArray).schema

    const render = async (schemas: ISchema) => {
      const [, vchart, actionExecutor] = getChart(schemas, ChartLibType.visactor, 'chart')

      const exe = async () => {
        for (let i = 0; i < schemas.actions.length; i++) {
          await actionExecutor.exeNext()
        }
      }
      await exe()

      return () => {
        vchart.release()
      }
    }
    render(schema)
  }, [code])

  return (
    <div>
      {/* <Button shape='round' type='outline' size='large' onClick={handleClick}>
        test
      </Button> */}
      <div id='chart'></div>
    </div>
  )
}
export default VisChart

/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:11:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-11 20:55:56
 * @FilePath: /algorithm-visualization/apps/website/src/chart.tsx
 * @Description: the chart configuration
 */

import React, { useEffect } from 'react'
// import { schema } from './mock';
// import { ISchema } from '@mono/data-structure/src/datatype'
import { getChart } from './utils'
import { ChartLibType } from './constant'
import { actionExec } from '@mono/exec/src/index'
import { MonoArray } from '@mono/data-structure/src/mono/array'
import { ISchema } from '@mono/data-structure/src/datatype'

const VisChart = () => {
  useEffect(() => {
    const getSchema = () => {
      const arr = new MonoArray({
        data: [
          { month: 'Monday', sales: 22 },
          { month: 'Tuesday', sales: 13 },
          { month: 'Wednesday', sales: 25 },
          { month: 'Thursday', sales: 29 },
          { month: 'Friday', sales: 38 }
        ],
        xField: 'month',
        yField: 'sales'
      })
      arr.push({ month: 'Monday1', sales: 55 })
      arr.push({ month: 'Tuesday1', sales: 12 })
      arr.pop()
      arr.set({ month: 'Tuesday', sales: 20 })
      arr.insert({ month: 'Tuesday2', sales: 200 }, 3)
      arr.delete({ month: 'Tuesday' })
      arr.delete({ sales: '200' })
      console.log(arr);

      return arr.schema
    }

    const schema = getSchema()

    const render = async (schemas: ISchema) => {
      const [spec, vchart] = getChart(schemas, ChartLibType.visactor, 'chart')

      const exe = async () => {
        for (let i = 0; i < schemas.actions.length; i++) {
          const action = schemas.actions[i]
          const spec1 = actionExec(action, spec)
          await new Promise(resolve => setTimeout(resolve, 1000))
          vchart.updateSpecSync(spec1)
          vchart.renderAsync()
        }
      }
      await exe()

      return () => {
        vchart.release()
      }
    }
    render(schema)
  }, [])

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

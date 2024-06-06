/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:11:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-06 14:46:56
 * @FilePath: /algorithm-visualization/apps/website/src/chart.tsx
 * @Description: the chart configuration
 */

import React, { useEffect } from 'react'
import { schema } from './mock';
import { ISchema } from '@mono/data-structure/src/datatype';
import { getChart } from './utils';
import { ChartLibType } from './constant';
import { actionExec } from '../../../packages/exec/src/index';

const VisChart = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const schemas: ISchema = schema
    const [spec, vchart] = getChart(schemas, ChartLibType.visactor, "chart")

    const exe = async () => {
      for(let i = 0; i < schemas.actions.length; i++){
        const action = schemas.actions[i]
        const spec1 = actionExec(action, spec)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        vchart.updateSpecSync(spec1)
        vchart.renderAsync()
      }
    }
    await exe()
    return () => {
      vchart.release()
    }
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

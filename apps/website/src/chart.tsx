/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:11:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-03 16:18:37
 * @FilePath: /algorithm-visualization/apps/website/src/chart.tsx
 * @Description: the chart configuration
 */

import { Button } from '@arco-design/web-react'
import React, { useCallback, useEffect, useState } from 'react'
import { CHARTTYPE, schema } from './constant'
import { getChart } from './utils'
import VChart from '@visactor/vchart'
import { IChartProps } from '@mono/chart-visactor/src/types'
import { IActions } from '@mono/exec/src/type'
import { actionExec } from '@mono/exec/src/index';

const VisChart = () => {
  const [vchart, setVChart] = useState<VChart>()
  const [actions, setActions] = useState<IActions[]>()
  const [spec, setSpec] = useState<IChartProps>()

  useEffect(() => {
    const [spec, vchart, actionExecv] = getChart(schema, CHARTTYPE.visactor, 'chart')

    setVChart(vchart)
    setSpec(spec)
    setActions(actionExecv)
  }, [])

  const handleClick = useCallback(() => {
    const render = setInterval(() => {
      const spec1 = actionExec(actions?.[0], spec)
      actions?.shift()
      vchart?.updateSpec(spec1)
      vchart?.renderAsync()

      if(actions?.length === 0) clearInterval(render)
    }, 1000)
  }, [actions, spec, vchart])

  return (
    <div>
      <Button shape='round' type='outline' size='large' onClick={handleClick}>
        test
      </Button>
      <div id='chart'></div>
    </div>
  )
}
export default VisChart

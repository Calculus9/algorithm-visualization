/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:11:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-29 16:00:55
 * @FilePath: /algorithm-visualization/apps/website/src/chart.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Button } from '@arco-design/web-react'
import React, { useCallback, useEffect, useState } from 'react'
import { CHARTTYPE, schema } from './constant'
import { getChart } from './utils'
import { actionExec } from '@mono/exec/src/index.ts'
import VChart from '@visactor/vchart'

const VisChart = () => {
  const [vchart, setVChart] = useState<VChart>()
  const [actions, setActions] = useState<Array<object>>()
  const [spec, setSpec] = useState()

  useEffect(() => {
    const [spec, vchart, actionExecv] = getChart(schema, CHARTTYPE.visactor, 'chart')
    setVChart(vchart)
    setSpec(spec)
    setActions(actionExecv)
  }, [])

  const handleClick = useCallback(() => {
    const render = setInterval(() => {
      const newSpec = actionExec(actions?.[0], spec)
      vchart?.updateSpec(newSpec)
      vchart?.renderAsync()
      actions?.shift()
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

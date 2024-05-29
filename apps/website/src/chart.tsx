/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:11:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-29 11:01:19
 * @FilePath: /algorithm-visualization/apps/website/src/chart.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Button } from "@arco-design/web-react"
import React, { useCallback, useEffect, useState } from "react"
import { schema } from "./constant"
import VChart from "@visactor/vchart"
import { getInitSpec } from "./utils"

const VisChart = () => {
  const [spec, setSpec] = useState(getInitSpec(schema))

  const handleClick = useCallback(() => {

  }, [])

  useEffect(() => {
    const vchart = new VChart(spec, { dom: 'chart' })
    vchart.renderAsync()
  }, [])

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

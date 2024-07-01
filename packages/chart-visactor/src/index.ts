import VChart from '@visactor/vchart'
import { IChartProps } from './types'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 18:38:30
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-01 18:57:24
 * @FilePath: /algorithm-visualization/packages/chart-visactor/src/index.ts
 * @Description: Here is the vchart.
 */

export const getVChart = (spec: IChartProps, dom: string) => {
  const vchart: VChart = new VChart(spec, { dom: dom })
  vchart.renderAsync()
  return vchart
}

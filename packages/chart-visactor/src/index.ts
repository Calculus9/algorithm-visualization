import VChart from '@visactor/vchart'
import { IChartProps } from './types'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 18:38:30
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-01 18:39:35
 * @FilePath: /algorithm-visualization/packages/chart-visactor/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export const getVChart = (spec: IChartProps, dom: string) => {
  const vchart: VChart = new VChart(spec, { dom: dom })
  vchart.renderAsync()
  return vchart
}

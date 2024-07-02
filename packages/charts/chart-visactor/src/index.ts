/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-02 20:53:26
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-02 20:54:51
 * @FilePath: /algorithm-visualization/packages/charts/chart-visactor/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import VChart from '@visactor/vchart'
import { IChartProps } from './types'

export const getVChart = (spec: IChartProps, dom: string) => {
  const vchart: VChart = new VChart(spec, { dom: dom })
  vchart.renderAsync()
  return vchart
}

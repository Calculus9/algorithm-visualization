/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-02 20:53:30
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-13 14:43:10
 * @FilePath: \algorithm-visualization\packages\charts\chart-visactor\src\utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import VChart, { ISpec } from '@visactor/vchart'

export const getVChart = (spec: ISpec, dom: string) => {
  const vchart: VChart = new VChart(spec, { dom: dom })
  vchart.renderAsync()
  return vchart
}

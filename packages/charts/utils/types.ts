/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-20 13:36:49
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 14:53:24
 * @FilePath: \algorithm-visualization\packages\charts\utils\types.ts
 * @Description:
 *
 */
export interface IOptionProps {
  type: string
  visual: {}
  layout?: {}
}

export interface IChartProps {
  type: string
  data: Array<{
    id: string
    values: object[] | number[]
  }>
  [key: string]: any
}

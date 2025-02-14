/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-20 13:36:49
 * @LastEditors: 1441211576@qq.com huangjingyu@kuaishou.com
 * @LastEditTime: 2025-02-13 16:09:38
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

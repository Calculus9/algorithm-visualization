/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-01 14:57:40
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-02 09:35:11
 * @FilePath: /algorithm-visualization/packages/chart-visactor/types.ts
 * @Description: We will define all the types and interface of visactor in this file.
 */

interface IDataProp {
  value: object
}

export interface IChart{
  id: string
  values: IDataProp[]
}
export interface IChartProps {
  type: string
  data: IChart
  xField?: string
  yField?: string
  axes?: Array<Object>
  animationNormal?: Object
}

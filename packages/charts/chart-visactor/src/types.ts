/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-02 20:53:32
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-02 20:55:11
 * @FilePath: /algorithm-visualization/packages/charts/chart-visactor/src/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IDataProp {
  value: Object
}

export interface IChart {
  id?: string
  values: Object[]
  xField: string
  yField: string
  animation?: number
  place?: number
}

export interface IChartProps {
  type: string
  data: IChart
  xField?: string
  yField?: string
  axes?: Array<Object>
  animationNormal?: Object
}

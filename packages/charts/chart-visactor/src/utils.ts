/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-02 20:53:30
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-02 20:55:18
 * @FilePath: /algorithm-visualization/packages/charts/chart-visactor/src/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IChart, IChartProps } from './types.ts'

export interface DataType {
  initSpec: IChart
  xField: string
  yField: string
}

export const chartBar = (props: DataType): IChartProps => {
  const { initSpec: init, xField, yField } = props

  return {
    type: 'bar',
    data: init,
    xField: xField,
    yField: yField
  }
}

export const chartLine = () => {
  return {
    type: 'line'
  }
}

export const chartTree = () => {
  return {
    type: 'tree'
  }
}

export const datastructure2chartTypeMap: {
  [index: string]: (props: DataType) => IChartProps
} = {
  array: chartBar
  // tree: chartTree
}

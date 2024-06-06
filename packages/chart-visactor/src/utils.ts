/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-28 16:07:50
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-05 18:41:04
 * @FilePath: /algorithm-visualization/packages/chart-visactor/src/utils.ts
 * @Description: this is the chart configuration, we will define all charts here.
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

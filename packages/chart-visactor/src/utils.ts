/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-28 16:07:50
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-03 09:54:28
 * @FilePath: /algorithm-visualization/packages/chart-visactor/src/utils.ts
 * @Description: this is the chart configuration, we will define all charts here.
 */

import { IChart, IChartProps } from './types.ts'

export const chartBar = (init: IChart, xField: string, yField: string): IChartProps => {
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

export const datastructure2chartType: {
  [index: string]: (init: IChart, xField: string, yField: string) => IChartProps
} = {
  array: chartBar
  // tree: chartTree
}

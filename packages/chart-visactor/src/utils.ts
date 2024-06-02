/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-28 16:07:50
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-01 15:25:46
 * @FilePath: /algorithm-visualization/packages/chart-visactor/src/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { IDataProps, IChartProps } from './types.ts'

export const chartBar = (init: IDataProps, xField: string, yField: string): IChartProps => {
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
  [index: string]: (init: IDataProps, xField: string, yField: string) => IChartProps
} = {
  array: chartBar
  // tree: chartTree
}

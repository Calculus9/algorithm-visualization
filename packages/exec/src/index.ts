/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:37:39
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-03 16:37:50
 * @FilePath: /algorithm-visualization/packages/exec/src/bar.ts
 * @Description: execute the actions
 */
import { IChartProps } from '@mono/chart-visactor/src/types.ts'
import { IActions } from './type.ts'
import { Operation, OP_STRATEGY } from './strategy';

export const actionExec = (action: IActions , spec: IChartProps ) => {
  const { data, xField } = spec

  const value = action?.value
  const op: Operation = action?.op as unknown as Operation

  data.values = OP_STRATEGY[Operation[op]](data?.values, value, xField)
  return spec
}

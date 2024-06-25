/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:37:39
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-11 20:40:46
 * @FilePath: /algorithm-visualization/packages/exec/src/bar.ts
 * @Description: execute the actions
 */
import { IChartProps } from '@mono/chart-visactor/src/types.ts'
import { IActions } from './type.ts'
import { Operation, OP_STRATEGY, OperationParams } from './strategy'

export const actionExec = (action: IActions, spec: IChartProps) => {
  const { data, xField, yField } = spec

  const value = action?.value
  const op: Operation = action?.op as unknown as Operation
  const place = action?.place

  const props: OperationParams = {
    data: data?.values,
    value: value,
    xField: xField,
    place: place,
    yField: yField
  }

  data.values = OP_STRATEGY[Operation[op]](props)
  return spec
}

/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:37:39
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-01 18:40:59
 * @FilePath: /algorithm-visualization/packages/exec/src/bar.ts
 * @Description: execute the actions
 */
import { IChartProps } from '@alvis/chart-visactor/src/types.ts'
import { IActions } from './types.ts'
import { Operation, OP_STRATEGY, OperationParams } from './strategy'
import { ActionExec } from './actionExec.ts'
import { ISchema } from '@alvis/schema/src/types'
import VChart from '@visactor/vchart'

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

export const getActionExe = (schema: ISchema): IActions[] => {
  return schema.actions
}

export const getActions = (schema: ISchema, spec: IChartProps, vchart: VChart) => {
  const actions = getActionExe(schema)
  const actionExecutor = new ActionExec(spec, vchart, actions)
  return actionExecutor
}

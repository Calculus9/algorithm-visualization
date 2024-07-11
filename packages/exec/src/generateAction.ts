import { ISchema } from '@alvis/schema/src'
import VChart from '@visactor/vchart'
import { IChartProps } from '@alvis/charts/chart-visactor/src'
import { ActionExec } from './index'
import { Operation, OperationParams, OP_STRATEGY } from './strategy'
import { IActions } from './types'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-11 16:12:57
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-11 16:36:35
 * @FilePath: \algorithm-visualization\packages\exec\src\generateAction.ts
 * @Description:
 *
 */
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

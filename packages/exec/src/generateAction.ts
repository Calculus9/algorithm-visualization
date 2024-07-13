import { ISchemaProps } from '@alvis/schema/src'
import VChart, { ISpec } from '@visactor/vchart'

import { ActionExec } from './index'
import { OperationParams } from '@alvis/data-structure/src/utils/strategy'
import { IActions } from './types'
import { arrayOperations } from '@alvis/data-structure/src'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-11 16:12:57
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-13 20:35:11
 * @FilePath: \algorithm-visualization\packages\exec\src\generateAction.ts
 * @Description:
 *
 */
export const actionExec = (action: IActions, spec: ISchemaProps['specs']) => {
  const { data, xField, yField } = spec

  let valueOfData = data[0].values

  const value = action?.value
  const op: string = action?.op
  const place = action?.place

  const props: OperationParams = {
    data: valueOfData,
    value: value,
    xField: xField,
    place: place,
    yField: yField
  }

  data.values = arrayOperations[op](props)
  return spec as ISpec
}

export const getActionExe = (schema: ISchemaProps): IActions[] => {
  return schema.actions
}

export const getActions = (schema: ISchemaProps, spec: ISchemaProps['specs'], vchart: VChart) => {
  const actions = getActionExe(schema)

  const actionExecutor = new ActionExec(spec, vchart, actions)

  return actionExecutor
}

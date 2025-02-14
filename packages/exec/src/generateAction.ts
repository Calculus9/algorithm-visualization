import { ISchemaProps } from '@alvis/schema/src'
import VChart, { ISpec } from '@visactor/vchart'

import { ActionExec } from './index'
import { OperationParams } from '@alvis/data-structure/src/utils/strategy'
import { IActions } from './types'
import { arrayOperations } from '@alvis/data-structure/src'
import { IChartProps } from '@alvis/charts/index'
import { arrayOP } from '@alvis/data-structure/src'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-11 16:12:57
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:13:59
 * @FilePath: \algorithm-visualization\packages\exec\src\generateAction.ts
 * @Description:
 *
 */
import _ from 'lodash'
export const actionExec = (action: IActions, spec: IChartProps, schema: ISchemaProps) => {
  const { data } = spec
  const { category, value } = schema?.fields ?? {}
  const actionValue = action?.value
  const op: arrayOP = action?.op as arrayOP
  const place = action?.place

  const props: OperationParams = {
    data: data[0].values as object[],
    modifyValue: actionValue,
    category: category,
    place: place,
    value: value
  }

  data[0].values = _.cloneDeep(arrayOperations[op](props))

  return spec as ISpec
}

export const getActionExe = (schema: ISchemaProps): IActions[] => {
  return schema.actions
}

export const getActions = (schema: ISchemaProps, spec: IChartProps, vchart: VChart) => {
  const actions = getActionExe(schema)

  const actionExecutor = new ActionExec(spec, vchart, actions, schema)

  return actionExecutor
}

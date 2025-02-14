import { ISchemaProps } from '@alvis/schema/src'
import VChart, { ISpec } from '@visactor/vchart'

import { ActionExec } from './index'
import { OperationParams } from '@alvis/data-structure/src/utils/strategy'
import { IActions } from './types'
import { arrayOperations } from '@alvis/data-structure/src'
import { IChartProps } from '@alvis/charts/index'
import { arrayOP } from '@alvis/data-structure/src'

import _ from 'lodash'
import { stackOperations } from '@alvis/data-structure/src/alvis/stack'

export const operationMapping = {
  stack: stackOperations,
  array: arrayOperations
}

export const actionExec = (action: IActions, spec: IChartProps, schema: ISchemaProps) => {
  const { data, dataStructure } = spec

  const { category, value } = schema?.fields ?? {}
  const actionValue = action?.value
  const op = action?.op
  const place = action?.place

  const props: OperationParams = {
    data: data[0].values as object[],
    modifyValue: actionValue,
    category: category,
    place: place,
    value: value
  }
  data[0].values = _.cloneDeep(operationMapping?.[dataStructure]?.[op](props))

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

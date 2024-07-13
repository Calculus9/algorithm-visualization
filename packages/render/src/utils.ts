/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:32:05
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-13 14:43:35
 * @FilePath: \algorithm-visualization\packages\render\src\utils.ts
 * @Description: render index
 */
import { ISchemaProps } from '@alvis/schema/src'

import VChart, { ISpec } from '@visactor/vchart'
import { ActionExec } from '@alvis/exec/src/index'

import { getActionExe, getActions } from '@alvis/exec/src/index'
import { ChartLibType } from '@alvis/website/src/constant.ts'
import { getVChart } from '@alvis/charts/chart-visactor/src'

/**
 * parse schema 2 Specs
 * @param schema
 * @returns spec
 */
export const getSpec = (schema: ISchemaProps): ISchemaProps['specs'] => {
  return schema.specs
}

/**
 * parse schema to chart and action execv
 * @param schema
 * @param chartType
 */
export const getChart = (
  schema: ISchemaProps,
  chartType: ChartLibType,
  dom: string
): [ISchemaProps['specs'], VChart, ActionExec] => {
  if (ChartLibType.visactor === chartType) {
    const spec: ISchemaProps['specs'] = getSpec(schema)
    const vchart: VChart = getVChart(spec as ISpec, dom)
    const actionExecutor = getActions(schema, spec, vchart)
    return [spec, vchart, actionExecutor]
  }

  // d3
  const spec = getSpec(schema)
  // const actionExecv = getActionExe(schema)
  const vchart: VChart = new VChart(spec, { dom: dom })
  vchart.renderAsync()
  const actions = getActionExe(schema)
  const actionExecutor = new ActionExec(spec, vchart, actions)

  return [spec, vchart, actionExecutor]
}

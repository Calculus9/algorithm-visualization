/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:32:05
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 21:43:40
 * @FilePath: \algorithm-visualization\packages\render\src\utils.ts
 * @Description: render index
 */
import { ISchemaProps } from '@alvis/schema/src'

import VChart, { ISpec } from '@visactor/vchart'
import { ActionExec } from '@alvis/exec/src/index'

import { getActionExe, getActions } from '@alvis/exec/src/index'
import { ChartLibType } from '@alvis/website/src/constant.ts'
import { getVChart } from '@alvis/charts/chart-visactor/src'
import { IChartProps } from '@alvis/charts/utils/types'
import { Adaptee } from '../../data-structure/src/alvis/array/adaptee'

/**
 * parse schema 2 Specs
 * @param schema
 * @returns spec
 */
export const getSpec = (schema: ISchemaProps): IChartProps => {
  const { chartConfig, data } = schema
  const { type, layout } = chartConfig
  const visual = new Adaptee(schema).getVisual()

  return {
    type,
    ...visual,
    ...layout,
    data
  }
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
): [IChartProps, VChart, ActionExec] => {
  if (ChartLibType.visactor === chartType) {
    const spec: IChartProps = getSpec(schema)
    const vchart: VChart = getVChart(spec as ISpec, dom)

    const actionExecutor = getActions(schema, spec, vchart)
    return [spec, vchart, actionExecutor]
  }

  // d3
  const spec = getSpec(schema)
  // const actionExecv = getActionExe(schema)
  const vchart: VChart = new VChart(spec as ISpec, { dom: dom })
  vchart.renderAsync()
  const actions = getActionExe(schema)
  const actionExecutor = new ActionExec(spec, vchart, actions)

  return [spec, vchart, actionExecutor]
}

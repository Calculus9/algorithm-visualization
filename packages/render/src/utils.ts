/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:32:05
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 18:43:53
 * @FilePath: \algorithm-visualization\packages\render\src\utils.ts
 * @Description: render index
 */
import { ISchemaProps } from '@alvis/schema/src'

import VChart, { ISpec } from '@visactor/vchart'
import { ActionExec } from '@alvis/exec/src/index'

import { getActionExe, getActions } from '@alvis/exec/src/index'
import { ChartLibType } from '@alvis/web/src/constant.ts'
import { getVChart } from '@alvis/charts/chart-visactor/src'
import { IChartProps } from '@alvis/charts/index'

/**
 * parse schema 2 Specs
 * @param schema
 * @returns spec
 */
export const getSpec = (schema: ISchemaProps): IChartProps => {
  const { chartConfig, data } = schema
  const { type, layout, visual, chartFields } = chartConfig ?? {}

  return {
    type,
    ...visual,
    ...layout,
    ...chartFields,
    data: [
      {
        id: `${type}-data`,
        values: data
      }
    ]
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
  const actionExecutor = new ActionExec(spec, vchart, actions, schema)

  return [spec, vchart, actionExecutor]
}

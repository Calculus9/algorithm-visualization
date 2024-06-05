import { ISchema } from '@mono/data-structure/src/datatype'
import { datastructure2chartTypeMap } from '@mono/chart-visactor/src/utils'
import { ChartLibType } from './constant'
import VChart from '@visactor/vchart'
import { IChartProps } from '@mono/chart-visactor/src/types'
import { IActions } from '@mono/exec/src/type'

/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:16:48
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-04 22:27:27
 * @FilePath: /algorithm-visualization/apps/website/src/utils.ts
 * @Description: utils file contains the chart common operations
 */
const getSpec = (schema: ISchema): IChartProps => {
  const { type, init } = schema

  const xField = Object.keys(init?.['values'][0])[0]
  const yField = Object.keys(init?.['values'][0])[1]


  return datastructure2chartTypeMap[type]({init, xField, yField})
}

const getActionExe = (schema: ISchema): IActions[] => {
  return schema.actions
}

/**
 * parse schema to chart and action execv
 * @param schema
 * @param chartType
 */
export const getChart = (
  schema: ISchema,
  chartType: ChartLibType,
  dom: string
): [IChartProps, VChart, IActions[]] => {
  if (ChartLibType.visactor === chartType) {
    const spec: IChartProps = getSpec(schema)
    const actionExecv: IActions[] = getActionExe(schema)

    const vchart: VChart = new VChart(spec, { dom: dom })
    vchart.renderAsync()
    return [spec, vchart, actionExecv]
  }
  // d3
  const spec = getSpec(schema)
  const actionExecv = getActionExe(schema)
  const vchart: VChart = new VChart(spec, { dom: dom })
  vchart.renderAsync()
  return [spec, vchart, actionExecv]
}

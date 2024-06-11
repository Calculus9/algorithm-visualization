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
 * @LastEditTime: 2024-06-05 19:06:01
 * @FilePath: /algorithm-visualization/apps/website/src/utils.ts
 * @Description: utils file contains the chart common operations
 */
const getSpec = (schema: ISchema): IChartProps => {
  const { type, initSpec } = schema

  const { xField, yField } = initSpec

  return datastructure2chartTypeMap[type]({ initSpec, xField, yField })
}

export const getActionExe = (schema: ISchema): IActions[] => {
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
): [IChartProps, VChart] => {
  if (ChartLibType.visactor === chartType) {
    console.log(schema);

    const spec: IChartProps = getSpec(schema)
    const vchart: VChart = new VChart(spec, { dom: dom })
    vchart.renderAsync()
    console.log(spec, vchart);

    return [spec, vchart]
  }
  // d3
  const spec = getSpec(schema)
  // const actionExecv = getActionExe(schema)
  const vchart: VChart = new VChart(spec, { dom: dom })
  vchart.renderAsync()
  return [spec, vchart]
}

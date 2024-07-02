/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:32:05
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-02 20:56:07
 * @FilePath: /algorithm-visualization/packages/render/index.tsx
 * @Description: render index
 */
import { ISchema } from '@alvis/schema/src/types'
import { datastructure2chartTypeMap } from '../../charts/chart-visactor/src/utils'
import { IChartProps } from '../../charts/chart-visactor/src/types'

import VChart from '@visactor/vchart'
import { ActionExec } from '@alvis/exec/src/actionExec'

import { getActionExe, getActions } from '@alvis/exec/src'
import { ChartLibType } from '@alvis/website/src/constant.ts'
import { getVChart } from '@alvis/charts/chart-visactor/src'

/**
 * parse schema 2 Specs
 * @param schema
 * @returns spec
 */
export const getSpec = (schema: ISchema): IChartProps => {
  const { type, initSpec } = schema

  const { xField, yField } = initSpec

  return datastructure2chartTypeMap[type]({ initSpec, xField, yField })
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
): [IChartProps, VChart, ActionExec] => {
  if (ChartLibType.visactor === chartType) {
    const spec: IChartProps = getSpec(schema)
    const vchart: VChart = getVChart(spec, dom)
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

export const renderChart = async (schemas: ISchema) => {
  const [, vchart, actionExecutor] = getChart(schemas, ChartLibType.visactor, 'chart')

  const exe = async () => {
    for (let i = 0; i < schemas.actions.length; i++) {
      await actionExecutor.exeNext()
    }
  }
  await exe()

  return () => {
    vchart.release()
  }
}

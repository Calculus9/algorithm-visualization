import { ISchema } from "@mono/data-structure/src/datatype"
import { datastructure2chartType } from "@mono/chart-visactor/src/utils"
import { CHARTTYPE, schema } from "./constant"
import VChart from "@visactor/vchart"

/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:16:48
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-29 15:32:17
 * @FilePath: /algorithm-visualization/apps/website/src/utils.ts
 * @Description: utils file contains the chart operations
 */
const getSpec = (schema:ISchema) => {
  const { type, init } = schema
  const xField = Object.keys(init?.["values"][0])[0]
  const yField = Object.keys(init?.["values"][0])[1]

  return datastructure2chartType[type](init, xField, yField)
}

const getActionExe = (schema: ISchema) => {
  return schema.actions
}

/**
 * parse schema to chart and action execv
 * @param schema
 * @param chartType
 */
export const getChart = (schema: ISchema, chartType: CHARTTYPE, dom: string) => {
  if(CHARTTYPE.visactor === chartType){
    const spec = getSpec(schema)
    const actionExecv = getActionExe(schema)
    const vchart = new VChart(spec, {dom: dom})
    vchart.renderAsync()
    return [spec, vchart, actionExecv]
  }
  // d3
  // if(CHARTTYPE.d3 === chartType){
  //   const spec = getSpec(schema)
  //   const actionExecv = getActionExe(schema)
  // }
}

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-05 16:11:02
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 17:42:11
 * @FilePath: \algorithm-visualization\packages\schema\src\builder\schema.ts
 * @Description:
 *
 */

import _ from 'lodash'
import { ISchemaProps } from '..'
class Schema {
  schema: ISchemaProps
  constructor() {
    this.schema = {
      dataStructureType: '',
      data: [],
      actions: [],
      fields: {},
      chartConfig: {
        type: '',
        visual: {},
        layout: {},
        chartFields: {}
      }
    }
  }

  // Data
  setData(data: ISchemaProps['data']) {
    this.schema.data = data
  }
  getData() {
    return this.schema.data
  }

  // DataStructure Type
  setDataStructureType(dataStructureType: string) {
    this.schema.dataStructureType = dataStructureType
  }
  getDataStructureType() {
    return this.schema.dataStructureType
  }

  // chartConfig
  setChartConfig(chartConfig) {
    this.schema.chartConfig = _.cloneDeep(chartConfig)
  }
  getChartConfig() {
    return this.schema.chartConfig
  }

  // actions
  getActions() {
    return this.schema.actions
  }
  setActions(actions: ISchemaProps['actions']) {
    this.schema.actions = actions
  }

  // fields
  setFields(fields: ISchemaProps['fields']) {
    this.schema.fields = fields
  }
  getFields() {
    return this.schema.fields
  }

  // schema
  getSchema() {
    return this.schema
  }
}
export { Schema }

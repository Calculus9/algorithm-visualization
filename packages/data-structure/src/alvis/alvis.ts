/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-20 13:33:56
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 14:46:53
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\alvis.ts
 * @Description:
 *
 */
import { ISchemaProps, Schema } from '@alvis/schema/src'
import { AlVisArray } from './array'

export interface IInitConfigurationProps {
  data: object[] | number[]
  [key: string]: any
}
export interface IDataProps {
  [key: string]: string | number
}

class AlVis {
  datastructureType!: string
  schema!: ISchemaProps
  data: ISchemaProps['data']
  chartConfig!: ISchemaProps['chartConfig']
  actions!: ISchemaProps['actions']
  fields!: ISchemaProps['fields']

  constructor(type: string, config: IInitConfigurationProps) {
    this.data = []
    this.init(type, config)
    return this.getInstance(config)
  }

  init(datastructureType: string, config: IInitConfigurationProps) {
    const schemaBuilder = new Schema(datastructureType, config)
    this.data = schemaBuilder.getData()
    ;[this.datastructureType, this.actions, this.fields] = schemaBuilder.getBasicProperties()
    this.chartConfig = schemaBuilder.getChartOptions()

    this.schema = {
      dataStructureType: this.datastructureType,
      data: this.data,
      fields: this.fields,
      chartConfig: this.chartConfig,
      actions: this.actions
    }
  }

  getInstance(specs: IInitConfigurationProps) {
    switch (this.datastructureType) {
      case 'array':
        return new AlVisArray(specs)
      default:
        throw new Error(`Unknown type: ${this.datastructureType}`)
    }
  }
}

export { AlVis }

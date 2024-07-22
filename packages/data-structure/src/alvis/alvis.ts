/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-20 13:33:56
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 18:43:25
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\alvis.ts
 * @Description:
 *
 */
import { ISchemaProps, Schema } from '@alvis/schema/src'
import { AlvisArray } from './array'

export interface IInitConfigurationProps {
  data: object[]
  [key: string]: any
}
export interface IDataProps {
  [key: string]: string | number
}

class Alvis {
  datastructureType: string
  schema: ISchemaProps
  data: ISchemaProps['data']
  chartConfig: ISchemaProps['chartConfig']
  actions: ISchemaProps['actions']

  constructor(type: string, config: IInitConfigurationProps) {
    this.data = []
    this.init(type, config)
    return this.getInstance(config)
  }

  init(datastructureType: string, config: IInitConfigurationProps) {
    const schemaBuilder = new Schema(datastructureType, config)
    this.data = schemaBuilder.getData()
    ;[this.datastructureType, this.actions] = schemaBuilder.getBasicProperties()
    this.chartConfig = schemaBuilder.getChartOptions()
    console.log(this.data, datastructureType, this.actions, this.chartConfig)

    this.schema = {
      dataStructureType: this.datastructureType,
      data: this.data,
      chartConfig: this.chartConfig,
      actions: this.actions
    }
  }

  getInstance(specs: IInitConfigurationProps) {
    switch (this.datastructureType) {
      case 'array':
        return new AlvisArray(specs)
      default:
        throw new Error(`Unknown type: ${this.datastructureType}`)
    }
  }
}

export { Alvis }

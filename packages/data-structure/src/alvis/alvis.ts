/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-20 13:33:56
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 21:31:08
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\alvis.ts
 * @Description:
 *
 */
import { ISchemaProps } from '@alvis/schema/src'
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
  originData: object[]

  constructor(type: string, specs: IInitConfigurationProps) {
    this.datastructureType = type
    this.originData = []
    this.schema = {
      dataStructureType: '',
      chartConfig: {
        type: '',
        visual: {
          xField: '',
          yField: ''
        }
      },
      data: [
        {
          values: [],
          id: ''
        }
      ],
      actions: []
    }

    return this.getInstance(specs)
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

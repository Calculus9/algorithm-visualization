/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-20 14:04:17
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 15:50:26
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\adapter.ts
 * @Description: use Adpter to unify the schema
 *
 */

import { ISchemaProps } from '@alvis/schema/src'
import { IInitConfigurationProps } from '../alvis'
import { isNumberArray } from '../../utils'
import _, { update, values } from 'lodash'

class Adapter {
  schema: ISchemaProps
  constructor(dataStructureTypes: string, config: IInitConfigurationProps) {
    this.schema = this.generateSchema(dataStructureTypes, config)
  }

  getSchema = (): ISchemaProps => {
    return this.schema
  }

  generateSchema = (dataStructureTypes: string, config: IInitConfigurationProps) => {
    return {
      dataStructureType: dataStructureTypes,
      chartConfig: _.cloneDeep(this.getChartConfigs(config)),
      data: this.getData(dataStructureTypes, config?.data),
      actions: []
    }
  }

  getChartConfigs(config: IInitConfigurationProps): ISchemaProps['chartConfig'] {
    let { type = 'bar', visual, layout } = config?.options ?? {}
    if (type === 'pie') {
      visual.xField = _.cloneDeep(visual?.categoryField)
      visual.yField = _.clone(visual?.valueField)
      delete visual.categoryField
      delete visual.valueField
    } else {
      const { direction } = layout
      if (direction) [visual.xField, visual.yField] = [visual.yField, visual.xField]
    }

    return {
      type,
      visual: _.cloneDeep(visual),
      layout
    }
  }

  getData(type: string, data: object[]): ISchemaProps['data'] {
    let res: object[] = data
    if (isNumberArray(data)) {
      res = data.map((d, index) => {
        return {
          id: `${d}-${index}`,
          key: index,
          value: d
        }
      })
    }
    return [
      {
        id: `${type}_Data`,
        values: res
      }
    ]
  }
}

export { Adapter }

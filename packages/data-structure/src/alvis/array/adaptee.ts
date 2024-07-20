/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-20 14:42:22
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 20:52:19
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\adaptee.ts
 * @Description:
 *
 */

import { ISchemaProps } from '@alvis/schema/src/types'
import _ from 'lodash'

class Adaptee {
  schema: ISchemaProps
  constructor(schema: ISchemaProps) {
    this.schema = schema
    this.handleVisual(this.schema)
  }

  getVisual() {
    return this.schema?.chartConfig?.visual
  }

  handleVisual(schema: ISchemaProps) {
    const { chartConfig } = schema
    const { visual, type, layout } = chartConfig ?? {}
    const { xField, yField } = visual ?? {}
    if (type === 'pie') {
      visual.categoryField = xField
      visual.valueField = yField
      delete visual.xField
      delete visual.yField
    } else {
      const { direction = '' } = layout ?? {}
      if (direction) [visual.xField, visual.yField] = [visual.yField, visual.xField]
    }
  }
}

export { Adaptee }

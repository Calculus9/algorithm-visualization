import { IInitConfigurationProps } from '@alvis/data-structure/src/index'
import { ISchemaProps } from '../..'
import { ChartStrategy } from './chartStrategy'
import { IFieldsProps } from '../../types'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 16:55:12
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 15:29:11
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\chart\bar.ts
 * @Description:
 *
 */
class BarStrategy implements ChartStrategy {
  public generateChartOptions(config: IInitConfigurationProps): ISchemaProps['chartConfig'] {
    const { options } = config ?? {}
    const { fields, type, layout, visual } = options ?? {}
    const { category, value } = fields ?? {}
    const { direction = 'vertical' } = layout ?? {}
    let chartFields: IFieldsProps = {
      xField: category,
      yField: value
    }
    if (direction === 'horizontal') {
      chartFields = {
        xField: value,
        yField: category
      }
    }
    return {
      layout,
      visual,
      type,
      chartFields
    }
  }
}

export { BarStrategy }

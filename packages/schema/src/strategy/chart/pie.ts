import { IInitConfigurationProps } from '@alvis/data-structure/src/index'
import { ChartStrategy } from './chartStrategy'
import { ISchemaProps } from '../..'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 16:54:41
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:04:12
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\chart\pie.ts
 * @Description:
 *
 */
class PieStrategy implements ChartStrategy {
  public generateChartOptions(config: IInitConfigurationProps): ISchemaProps['chartConfig'] {
    const { options } = config ?? {}
    const { fields, type, layout, visual } = options ?? {}
    const { category, value } = fields ?? {}
    return {
      layout,
      visual,
      type,
      chartFields: {
        categoryField: category,
        valueField: value
      }
    }
  }
}

export { PieStrategy }

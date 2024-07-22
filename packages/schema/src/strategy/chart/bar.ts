import { IInitConfigurationProps } from '@alvis/data-structure/src/alvis/alvis'
import { ISchemaProps } from '../..'
import { ChartStrategy } from './chartStrategy'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 16:55:12
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 18:20:32
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\chart\bar.ts
 * @Description:
 *
 */
class BarStrategy implements ChartStrategy {
  public generateChartOptions(
    config: IInitConfigurationProps['options']
  ): ISchemaProps['chartConfig'] {
    return config
  }
}

export { BarStrategy }

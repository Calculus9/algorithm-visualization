import { IInitConfigurationProps } from '@alvis/data-structure/src/alvis/alvis'
import { ChartStrategy } from './chartStrategy'
import { ISchemaProps } from '../..'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 16:54:41
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 18:08:49
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\chart\pie.ts
 * @Description:
 *
 */
class PieStrategy implements ChartStrategy {
  public generateChartOptions(
    config: IInitConfigurationProps['options']
  ): ISchemaProps['chartConfig'] {
    return config
  }
}

export { PieStrategy }

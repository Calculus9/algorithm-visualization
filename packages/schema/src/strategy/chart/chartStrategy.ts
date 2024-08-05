import { IInitConfigurationProps } from '@alvis/data-structure/src/index'
import { ISchemaProps } from '../..'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 16:43:22
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:04:06
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\chart\chartStrategy.ts
 * @Description:
 *
 */
export interface ChartStrategy {
  generateChartOptions(config: IInitConfigurationProps): ISchemaProps['chartConfig']
}

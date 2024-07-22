/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 16:43:05
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 18:04:35
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\chart\chartContext.ts
 * @Description:
 *
 */
import { IInitConfigurationProps } from '@alvis/data-structure/src/alvis/alvis'
import { ChartStrategy } from './chartStrategy'

class ChartContext {
  strategy: ChartStrategy
  constructor(strategy: ChartStrategy) {
    this.strategy = strategy
  }

  public getChartOptions(config: IInitConfigurationProps['options']) {
    return this.strategy.generateChartOptions(config)
  }
}
export { ChartContext }

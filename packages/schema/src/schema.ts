/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 17:11:08
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 18:46:34
 * @FilePath: \algorithm-visualization\packages\schema\src\schema.ts
 * @Description:
 *
 */

import { IInitConfigurationProps } from '@alvis/data-structure/src/alvis/alvis'
import { IActions } from '@alvis/exec/src'
import { ChartContext } from './strategy/chart/chartContext'
import { ISchemaProps } from '.'
import { chartStrategyMap } from './strategy/chart/types'
import { DataContext } from './strategy/data/context'
import { dataStrategyMap } from './strategy/data/types'
class Schema {
  dataStructureType: string
  config: IInitConfigurationProps
  chartConfig: ISchemaProps['chartConfig']
  data: any
  constructor(dataStructureType: string, config: IInitConfigurationProps) {
    this.dataStructureType = dataStructureType
    this.config = config
    this.init()
  }
  init() {
    const { data, options } = this.config ?? {}
    const { type } = options ?? {}
    const chartInstance = chartStrategyMap?.get(type)
    this.chartConfig = new ChartContext(new chartInstance()).getChartOptions(options)
    let dataType = 'array'
    if (dataType === 'array') {
      const pre = data.every(d => Number.isFinite(d)) ? 'number' : 'object'
      dataType = `${pre}-${dataType}`
    }
    const dataInstance = dataStrategyMap?.get(dataType)
    this.data = new DataContext(new dataInstance())?.getData(data)
  }

  getData() {
    return this.data
  }

  getBasicProperties(): [string, IActions[]] {
    return [this.dataStructureType, []]
  }
  getChartOptions(): ISchemaProps['chartConfig'] {
    return this.chartConfig
  }
}
export { Schema }

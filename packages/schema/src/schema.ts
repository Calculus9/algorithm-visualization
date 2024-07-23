/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 17:11:08
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-23 17:00:33
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
import { dataStructureInitPropsMap } from './init/initMap'
import _ from 'lodash'

class Schema {
  dataStructureType: string
  config: IInitConfigurationProps
  chartConfig: ISchemaProps['chartConfig']
  data: any
  constructor(dataStructureType: string, config: IInitConfigurationProps) {
    this.dataStructureType = dataStructureType
    this.config = config
    this.init()

    this.formalize()
  }

  init(): void {
    const { type } = this.config ?? {}
    if (!type) {
      const tempConfig = dataStructureInitPropsMap.get(this.dataStructureType)
      this.config = _.cloneDeep({ ...tempConfig, data: this.config as unknown as number[] })
    }
  }

  formalize(): void {
    const { data, options } = this.config ?? {}
    const { type } = options ?? {}
    const chartInstance = chartStrategyMap?.get(type)
    if (chartInstance)
      this.chartConfig = new ChartContext(new chartInstance()).getChartOptions(options)
    let dataType = 'array'
    if (dataType === 'array') {
      const pre = data.every(d => Number.isFinite(d)) ? 'number' : 'object'
      dataType = `${pre}-${dataType}`
    }
    const dataInstance = dataStrategyMap?.get(dataType)
    if (dataInstance) this.data = new DataContext(new dataInstance())?.getData(data)
  }

  getData(): ISchemaProps['data'] {
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

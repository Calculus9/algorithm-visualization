/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-05 15:57:48
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 09:52:26
 * @FilePath: \algorithm-visualization\packages\schema\src\builder\schemaBuilder.ts
 * @Description:
 *
 */
import { IFieldsProps } from '../types'
import { Builder } from './builder'
import { chartStrategyMap } from '../strategy/chart/types'
import { dataStrategyMap } from '../strategy/data/types'
import { IInitConfigurationProps } from '@alvis/data-structure/src/index'
import { ChartContext } from '../strategy/chart/chartContext'
import { DataContext } from '../strategy/data/context'
import { Schema } from './schema'
import _ from 'lodash'

const schemaBuilder = (): Builder => {
  const schema = new Schema()

  const loadData = (data: IInitConfigurationProps['data']) => {
    let dataType = 'array'
    if (dataType === 'array') {
      const pre = data?.every(d => _.isNumber(d)) ? 'number' : 'object'
      dataType = `${pre}-${dataType}`
    }
    const dataInstance = dataStrategyMap?.get(dataType)
    if (dataInstance) schema?.setData(new DataContext(new dataInstance())?.getData(data))
  }

  const loadBasicProperties = (fields: IFieldsProps, dataStructure: string) => {
    console.log(fields)

    schema.setFields(fields)
    schema.setDataStructureType(dataStructure)
    schema.setActions([])
  }

  const loadChartConfig = (config: IInitConfigurationProps) => {
    const { options } = config ?? {}
    const { type } = options ?? {}
    const chartInstance = chartStrategyMap?.get(type)
    if (chartInstance)
      schema.setChartConfig(new ChartContext(new chartInstance()).getChartOptions(config))
  }

  const build = (): Schema => {
    return schema
  }

  return {
    loadChartConfig,
    loadData,
    loadBasicProperties,
    build
  }
}
export { schemaBuilder }

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-05 15:53:54
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:03:04
 * @FilePath: \algorithm-visualization\packages\schema\src\builder\builder.ts
 * @Description:
 *
 */

import { IInitConfigurationProps } from '@alvis/data-structure/src/index'
import { IFieldsProps } from '../types'
import { Schema } from './schema'

type Builder = {
  loadData(data: IInitConfigurationProps['data']): void
  loadBasicProperties(fields: IFieldsProps, dataStructure: string): void
  loadChartConfig(config: IInitConfigurationProps): void
  build(): Schema
}

export type { Builder }

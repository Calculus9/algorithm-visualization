import { IInitConfigurationProps } from '@alvis/data-structure/src/alvis/alvis'
import { ISchemaProps } from '../..'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 16:58:36
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 18:17:32
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\data\strategy.ts
 * @Description:
 *
 */
export interface DataStrategy {
  generateData: (config: IInitConfigurationProps['data']) => ISchemaProps['data']
}

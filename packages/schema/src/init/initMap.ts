import { ISchemaProps } from '../types'
import { initArrayConfigs } from './array'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-23 16:42:55
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-23 16:44:01
 * @FilePath: \algorithm-visualization\packages\schema\src\init\initMap.ts
 * @Description:
 *
 */
const dataStructureInitPropsMap = new Map<string, ISchemaProps>([['array', initArrayConfigs]])
export { dataStructureInitPropsMap }

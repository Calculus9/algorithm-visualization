import { IInitConfigurationProps } from '@alvis/data-structure/src/index'
import { initArrayConfigs } from './array'
import { initStackConfigs } from './stack'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-23 16:42:55
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 18:55:48
 * @FilePath: \algorithm-visualization\packages\schema\src\init\initMap.ts
 * @Description:
 *
 */
const dataStructureInitPropsMap: Record<string, IInitConfigurationProps> = {
  array: initArrayConfigs,
  stack: initStackConfigs
}
export { dataStructureInitPropsMap }

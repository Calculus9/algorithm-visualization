import { initArrayConfigs } from './array'
import { IInitConfigurationProps } from '../index'
/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-23 16:42:55
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:07:39
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\init\initMap.ts
 * @Description:This contains the map relationship between datastructure and init configuration.
 *
 */
const dataStructureInitPropsMap: Record<string, IInitConfigurationProps> = {
  array: initArrayConfigs
}
export { dataStructureInitPropsMap }

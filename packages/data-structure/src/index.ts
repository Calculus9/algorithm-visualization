/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-11 16:19:21
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:08:46
 * @FilePath: \algorithm-visualization\packages\data-structure\src\index.ts
 * @Description:
 *
 */
// import { AlVisStack } from './alvis/stack'

import { AlVisArray, arrayOperations } from './alvis/array'
import { AlVis } from './alvis/alvis.ts'
import { isNumberArray, checkValue } from './utils/index.ts'
import { initArrayConfigs, dataStructureInitPropsMap } from './alvis/init'
import { IInitConfigurationProps } from './alvis/index.ts'

export {
  AlVisArray,
  arrayOperations,
  AlVis,
  isNumberArray,
  checkValue,
  initArrayConfigs,
  dataStructureInitPropsMap
}
export type { IInitConfigurationProps }

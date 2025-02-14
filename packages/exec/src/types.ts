/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-01 16:11:21
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:12:25
 * @FilePath: \algorithm-visualization\packages\exec\src\types.ts
 * @Description: this is the types definations
 */

import { stackOP } from '@alvis/data-structure/src/alvis/stack'
import { arrayOP } from '@alvis/data-structure/src/index'

export interface IActions {
  op: arrayOP | string | stackOP
  value?: Object
  place?: number
}

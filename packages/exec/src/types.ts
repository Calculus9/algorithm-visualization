/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-01 16:11:21
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 21:42:10
 * @FilePath: \algorithm-visualization\packages\exec\src\types.ts
 * @Description: this is the types definations
 */

import { arrayOP } from '@alvis/data-structure/src/alvis/array/function'

export interface IActions {
  op: arrayOP | string
  value?: Object
  place?: number
}

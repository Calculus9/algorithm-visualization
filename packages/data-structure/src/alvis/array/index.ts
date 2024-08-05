/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-11 20:35:28
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:13:11
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\index.ts
 * @Description:
 *
 */

export type arrayOP = 'push' | 'pop' | 'set' | 'insert' | 'delete' //| 'length' | 'shift' | 'unshift' | 'swap'

export type arrayOPMap = Record<arrayOP, Function>

import { AlVisArray } from './array'
import { arrayOperations } from './function'
export { AlVisArray, arrayOperations }

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-05 19:21:43
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:30:14
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\stack\index.ts
 * @Description:
 *
 */
export type stackOP = 'push' | 'pop' | 'clear' | 'size'

export type stackOPMap = Record<stackOP, Function>
import { AlVisStack } from './stack'
import { stackOperations } from './function'
export { AlVisStack, stackOperations }

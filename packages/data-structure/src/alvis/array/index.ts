/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-11 20:35:28
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2025-01-12 20:16:35
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\index.ts
 * @Description:
 *
 */

// This describes the opereation will infulence the chart.
export type arrayOP = 'push' | 'pop' | 'set' | 'insert' | 'delete' | 'swap' | 'shift' | 'unshift'

export type arrayOPMap = Record<arrayOP, Function>

import { AlVisArray } from './array'
import { arrayOperations } from './function'
export { AlVisArray, arrayOperations }

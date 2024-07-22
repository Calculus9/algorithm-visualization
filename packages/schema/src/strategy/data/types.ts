/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 18:35:51
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 18:46:19
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\data\types.ts
 * @Description:
 *
 */
import { ObjectArrayStrategy } from './array'
import { NumberArrayStrategy } from './numberArray'
const dataStrategyMap = new Map<string, typeof ObjectArrayStrategy>([
  ['object-array', ObjectArrayStrategy],
  ['number-array', NumberArrayStrategy]
  // ['tree']
])

export { dataStrategyMap }

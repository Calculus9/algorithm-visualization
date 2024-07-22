import { BarStrategy } from './bar'
import { PieStrategy } from './pie'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 17:18:28
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 17:52:39
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\chart\types.ts
 * @Description:
 *
 */
const chartStrategyMap = new Map<string, typeof BarStrategy>([
  ['pie', PieStrategy],
  ['bar', BarStrategy]
])

export { chartStrategyMap }

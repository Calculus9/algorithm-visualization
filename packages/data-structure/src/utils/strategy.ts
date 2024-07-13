/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-01 16:37:58
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-13 14:48:14
 * @FilePath: \algorithm-visualization\packages\exec\src\strategy.ts
 * @Description: this is the operation strategy file.We will define all the operations here.
 */

export interface OperationParams {
  data: Object[]
  value?: Object | number
  xField?: string
  yField?: string
  place?: number
}

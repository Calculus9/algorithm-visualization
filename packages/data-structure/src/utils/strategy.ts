/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-01 16:37:58
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-23 20:06:33
 * @FilePath: \algorithm-visualization\packages\data-structure\src\utils\strategy.ts
 * @Description: this is the operation strategy file.We will define all the operations here.
 */

export interface OperationParams {
  data: Object[]
  modifyValue?: Object | number
  category?: string
  value?: string
  place?: number
}

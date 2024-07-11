import { IChart } from '@alvis/charts/chart-visactor/src'
import { IActions } from '@alvis/exec/src/index'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 18:16:58
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-11 16:26:26
 * @FilePath: \algorithm-visualization\packages\schema\src\types.ts
 * @Description: Here is the defination of schemas.
 */

export interface ISchema {
  initSpec: IChart
  type: string
  actions: IActions[]
  // options?:
}

import { IChart } from '../../charts/chart-visactor/src/types'
import { IActions } from '@alvis/exec/src/types.ts'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 18:16:58
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-02 20:57:11
 * @FilePath: /algorithm-visualization/packages/schema/src/types.ts
 * @Description: Here is the defination of schemas.
 */

export interface ISchema {
  initSpec: IChart
  type: string
  actions: IActions[]
  // options?:
}

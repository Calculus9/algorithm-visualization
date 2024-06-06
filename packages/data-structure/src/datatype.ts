/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-28 15:59:35
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-03 09:50:27
 * @FilePath: /algorithm-visualization/packages/data-structure/src/datatype.ts
 * @Description: We will define the relavant datastructure in this file.
 */

import { IChart } from "@mono/chart-visactor/src/types"
import { IActions } from "@mono/exec/src/type.ts"


export interface ISchema {
  initSpec: IChart
  type: string
  actions: IActions[]

  // options?:
}[]

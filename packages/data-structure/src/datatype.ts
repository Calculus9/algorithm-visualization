/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-28 15:59:35
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-02 20:24:48
 * @FilePath: /algorithm-visualization/packages/data-structure/src/datatype.ts
 * @Description: We will define the relavant datastructure in this file.
 */

import { IActions } from "@mono/exec/src/type.ts"


export interface ISchema {
  init: {
    id: string,
    values: Array<Object>
  }
  type: string
  actions: IActions[]
  // options?:
}[]

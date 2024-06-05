/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-05 16:26:06
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-05 16:26:06
 * @FilePath: /algorithm-visualization/apps/website/src/mock.ts
 * @Description: Here is the mock data.
 */

import { ISchema } from "@mono/data-structure/src/datatype"


export const schema: ISchema = {
  type: 'array',
  init: {
    id: 'barData',
    values: [
      { month: 'Monday', sales: 22 },
      { month: 'Tuesday', sales: 13 },
      { month: 'Wednesday', sales: 25 },
      { month: 'Thursday', sales: 29 },
      { month: 'Friday', sales: 38 }
    ]
  },
  actions: [
    {
      op: 'push',
      value: { month: 'Monday1', sales: 55 }
    },
    {
      op: 'push',
      value: { month: 'Tuesday1', sales: 12 }
    },
    {
      op: 'pop'
    },
    {
      op: 'set',
      value: { month: 'Tuesday', sales: 20 }
    }
  ]
}

export const initData = [
  {
    id: 'barData',
    values: [
      { month: 'Monday', sales: 22 },
      { month: 'Tuesday', sales: 13 },
      { month: 'Wednesday', sales: 25 },
      { month: 'Thursday', sales: 29 },
      { month: 'Friday', sales: 38 }
    ]
  }
]

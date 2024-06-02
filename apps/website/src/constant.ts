/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 09:03:40
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-02 09:25:12
 * @FilePath: /algorithm-visualization/apps/website/src/constant.ts
 * @Description: mock data
 */

import { ISchema } from "@mono/data-structure/src/datatype"

export const MenuList = ['Home', 'API', 'Data Structure', 'Gallery']

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

export enum CHARTTYPE {
  visactor,
  d3
}

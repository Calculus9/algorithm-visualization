/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-01 16:37:58
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-03 09:52:32
 * @FilePath: /algorithm-visualization/packages/exec/src/strategy.ts
 * @Description: this is the operation strategy file.We will define all the operations here.
 */

export enum Operation {
  push,
  pop,
  set
}

export const OP_STRATEGY = {
  [Operation.push]: (data: Object[], value: Object): Object[] => {
    data.push(value)
    return data
  },
  [Operation.pop]: (data: Object[]) => {
    data.pop()
    return data
  },
  [Operation.set]: (data: Object[], value: Object, xField: string): Object[] => {
    let i = 0
    data.map((obj, index) => {
      if (obj[xField] === value?.[xField]) {
        i = index
      }
    })
    data[i] = value
    return data
  }
}

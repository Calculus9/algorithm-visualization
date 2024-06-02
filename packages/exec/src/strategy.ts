/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-01 16:37:58
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-02 20:14:53
 * @FilePath: /algorithm-visualization/packages/exec/src/strategy.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export enum Operation {
  push,
  pop,
  set
}

export const OP_STRATEGY = {
  [Operation.push]: (data: Object[], value: Object): Object[] => {
    console.log('push操作', data)
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

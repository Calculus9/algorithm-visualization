/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-01 16:37:58
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-01 16:47:02
 * @FilePath: /algorithm-visualization/packages/exec/src/strategy.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export interface actionStrategy {
  push: (data: Object[], value: Object) => Object[]
  pop: (data: Object[]) => Object[]
}

export const strategy: actionStrategy = {
  push: function (data: Object[], value: Object): Object[] {
    data.push(value)
    return data
  },
  pop: function (data: Object[]) {
    data.pop()
    return data
  }
}

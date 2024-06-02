/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:37:39
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-01 16:45:52
 * @FilePath: /algorithm-visualization/packages/exec/src/bar.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { strategy } from './strategy.ts'
import { IChartProps } from '@mono/chart-visactor/src/types.ts'
import { IActions } from './type.ts'
// export const actionExec1 = () => {
//   return strategy[op](data, value)
// }
export const actionExec = (action: IActions, spec: IChartProps) => {
  const { data, xField } = spec
  let arr: Object[] | undefined = data.values
  switch (action.op) {
    case 'push': {
      arr.push(action.value)
      break
    }
    case 'pop': {
      arr.pop()
      break
    }
    case 'set': {
      // set the target x value
      let i = 0
      arr.map((obj, index) => {
        if (obj[xField] === action?.value?.[xField]) {
          i = index
        }
      })
      arr[i] = action.value
      break
    }
    default:
      break
  }
  return spec
}

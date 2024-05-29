/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:37:39
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-29 15:44:59
 * @FilePath: /algorithm-visualization/packages/exec/src/bar.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export const actionExec = (action, spec) => {
  const { data } = spec
  let arr = data.values
  switch (action.op) {
    case 'push': {
      arr.push(action.value)
      break
    }
    case 'pop': {
      arr.pop()
      break
    }
    default:
      break
  }
  return spec
}

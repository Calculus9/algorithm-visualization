/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-15 09:20:17
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-15 14:36:29
 * @FilePath: /algorithm-visualization/packages/data-structure/src/utils/resolve.ts
 * @Description: resolve data
 */

interface IPros {
  type: string
  actions: Array<{ op: string; value?: Object }>
}
const parseSchema2VChart = (data: any[], schema: IPros, curAction: number = -1) => {
  const { actions } = schema
  console.log(curAction);

  switch (actions[curAction]['op']) {
    case 'push':
      data.push(actions[curAction]['value'])
      break
    case 'pop':
      data.pop()
      break
    default:
      break
  }
  return [
    {
      id: 'barData',
      values: data
    }
  ]
}
export { parseSchema2VChart }

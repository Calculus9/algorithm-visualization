/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-05 19:21:40
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:27:56
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\stack\function.ts
 * @Description:
 *
 */
import { OperationParams } from '../../utils'
import { stackOPMap } from './index'
const stackOperations: stackOPMap = {
  push: (props: OperationParams): Object[] => {
    const { data, modifyValue = {} } = props
    data.push(modifyValue)
    return data
  },
  pop: (props: OperationParams) => {
    const { data } = props
    data.pop()
    return data
  },
  clear: () => {
    return []
  },
  //   TODO:这里有问题
  size: () => {
    return null
  }
}

export { stackOperations }

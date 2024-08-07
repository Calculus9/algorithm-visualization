import { OperationParams } from '../../utils/strategy'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-11 20:35:09
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-23 21:36:03
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\function.ts
 * @Description:
 *
 */
import _ from 'lodash'
export type arrayOP = 'push' | 'pop' | 'set' | 'insert' | 'delete' //| 'length' | 'shift' | 'unshift' | 'swap'

export type arrayOPMap = Record<arrayOP, Function>

export interface ISetParams {
  [key: string]: number | string
}

const arrayOperations: arrayOPMap = {
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
  set: (props: OperationParams): object[] => {
    const { data, modifyValue = {}, category = 'key' } = props
    let index: number = -1
    data.map((d: object, i) => {
      if (
        (d as { [key: string]: object })[category] ===
        (modifyValue as { [key: string]: object })?.[category]
      ) {
        index = i
        return
      }
    })
    data[index] = modifyValue

    return data
  },
  insert: (props: OperationParams): Object[] => {
    const { data, modifyValue = {}, place = 0 } = props
    data.splice(place, 0, modifyValue)
    return data
  },
  delete: (props: OperationParams): Object[] => {
    const { data, modifyValue = {} } = props
    const type = Object.keys(modifyValue)[0]
    let index = 0

    data.map((obj, i) => {
      console.log(obj)

      if ((obj as { [key: string]: object })[type] === Object.values(modifyValue)[0]) index = i
    })
    data.splice(index, 1)
    return data
  }
}

export { arrayOperations }

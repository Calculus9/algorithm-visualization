import { OperationParams } from '../../utils/strategy'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-11 20:35:09
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 21:43:24
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
    const { data, value = {} } = props
    data.push(value)
    return data
  },
  pop: (props: OperationParams) => {
    const { data } = props
    data.pop()
    return data
  },
  set: (props: OperationParams): Object[] => {
    const { data, value, xField = 'key' } = props
    let index: number = 0
    data.map((d, i) => {
      if (d[xField] === value[xField]) {
        index = i
      }
    })
    data[index] = value
    // data[value[xField]] = value

    return data
  },
  insert: (props: OperationParams): Object[] => {
    const { data, value = {}, place = 0 } = props
    data.splice(place, 0, value)
    return data
  },
  delete: (props: OperationParams): Object[] => {
    const { data, value = {} } = props
    const type = Object.keys(value)[0]
    let index = 0

    data.map((obj, i) => {
      if (obj[type] === +Object.values(value)[0]) index = i
    })
    data.splice(index, 1)
    return data
  }
}

export { arrayOperations }

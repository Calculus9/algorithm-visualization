import { OperationParams } from '../../utils/strategy'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-11 20:35:09
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-13 15:12:37
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\function.ts
 * @Description:
 *
 */
type arrayOP = 'push' | 'pop' | 'get' | 'set' | 'insert' | 'delete' //| 'length' | 'shift' | 'unshift' | 'swap'

type arrayOPMap = Record<arrayOP, Object | Function>

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
  get: (props: { data: number[]; index: number }): number => {
    const { data, index } = props
    return data[index]
  },
  set: (props: OperationParams): Object[] => {
    const { data, value = {}, xField = '' } = props
    let i = 0
    data.map((obj, index) => {
      if (obj[xField] === value?.[xField]) {
        i = index
      }
    })
    data[i] = value
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

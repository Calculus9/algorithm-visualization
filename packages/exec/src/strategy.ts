/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-01 16:37:58
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-06 15:50:58
 * @FilePath: /algorithm-visualization/packages/exec/src/strategy.ts
 * @Description: this is the operation strategy file.We will define all the operations here.
 */

export enum Operation {
  push,
  pop,
  set,
  insert,
  delete
}

type StrategyTypes = {
  [key: string]: Function
}

export interface OperationParams {
  data: Object[]
  value?: Object | number
  xField?: string
  yField?: string
  place?: number
}

export const OP_STRATEGY: StrategyTypes = {
  [Operation.push]: (props: OperationParams): Object[] => {
    const { data, value = {} } = props
    data.push(value)
    return data
  },
  [Operation.pop]: (props: OperationParams) => {
    const { data } = props
    data.pop()
    return data
  },
  [Operation.set]: (props: OperationParams): Object[] => {
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
  [Operation.insert]: (props: OperationParams): Object[] => {
    const { data, value = {}, place = 0 } = props
    data.splice(place, 0, value)
    return data
  },
  // delete: find the place of value in data, and delete it
  [Operation.delete]: (props: OperationParams): Object[] => {
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

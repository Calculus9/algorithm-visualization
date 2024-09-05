import { arrayOPMap } from '.'
import { OperationParams } from '../../utils/strategy'

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-11 20:35:09
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:12:58
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\function.ts
 * @Description:
 *
 */
import _ from 'lodash'

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

    if (index < 0) {
      const { key, value } = modifyValue as { [key: string]: number }
      data[key] = {
        id: `${value}-${key}`,
        key: key,
        value: value
      }
    } else {
      data[index] = modifyValue
    }

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
      if ((obj as { [key: string]: object })[type] === Object.values(modifyValue)[0]) index = i
    })
    data.splice(index, 1)
    return data
  }
}

export { arrayOperations }

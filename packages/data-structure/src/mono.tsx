/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:35:11
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-11 20:46:24
 * @FilePath: /algorithm-visualization/packages/data-structure/index.tsx
 * @Description: Mono class
 */

import { ISchema } from './datatype'

export default class Mono {
  schema: ISchema
  constructor(_params: any) {
    this.schema = {
      initSpec: {
        id: '',
        values: [],
        xField: '',
        yField: ''
      },
      type: '',
      actions: []
    }
  }

  isNumberArray(arr: any): arr is number[] {
    return Array.isArray(arr) && arr.every(item => typeof item === 'number')
  }

  checkNumber(checkParams: number | object): object {
    let value: object
    if (typeof checkParams === 'number') {
      value = { key: `${checkParams}-${Math.random()}`, value: checkParams }
    } else {
      value = checkParams
    }
    return value
  }

  handleData(params: Array<number | object>) {
    if (!this.isNumberArray(params)) {
      return params
    } else {
      const objs = params.every((d: number) => ({ key: d, value: d }))
      return objs
    }
  }
}

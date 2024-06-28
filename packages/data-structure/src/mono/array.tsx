/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-11 19:02:38
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-28 23:31:13
 * @FilePath: /algorithm-visualization/packages/data-structure/src/mono copy.tsx
 * @Description: Parse Mono Array To Schema
 */

import { IChart } from '@mono/chart-visactor/src/types'
import Mono from '../mono'

export interface IArrayProps {
  data: number[] | { [key: string]: string | number }[]
  options?: {
    state?: object
    transition?: object
  }
  xField: string
  yField: string
}

export class MonoArray extends Mono {
  constructor(params: number[] | IArrayProps) {
    super(params)
    this.init(params)
  }

  private init(params: number[] | IArrayProps) {
    let res: Object[], initSpecs: IChart
    let x: string = '',
      y: string = ''
    if (!this.isNumberArray(params)) {
      // TODO: isArray
      const { data, xField, yField } = params
      if (!this.isNumberArray(data)) {
        res = data
        ;(x = xField), (y = yField)
      } else res = data.map((d: number) => ({ key: d, value: d }))
    } else {
      res = params.map((d: number) => ({ key: d, value: d }))
    }
    // TODO: 将spec和data解ou
    initSpecs = {
      values: res,
      xField: x || 'key',
      yField: y || 'value'
    }

    this.initType()
    this.schema.initSpec = initSpecs
  }
  // 写成属性
  initType() {
    this.schema.type = 'array'
  }

  push(pushParams: number | object) {
    this.schema.actions.push({ op: 'push', value: this.checkValue(pushParams) })
  }

  pop() {
    this.schema.actions.push({ op: 'pop' })
  }

  set(setParams: object) {
    this.schema.actions.push({ op: 'set', value: setParams })
  }

  insert(insertData: number | object, place: number) {
    this.schema.actions.push({ op: 'insert', value: this.checkValue(insertData), place })
  }

  delete(deleteData: object) {
    this.schema.actions.push({ op: 'delete', value: deleteData })
  }
}

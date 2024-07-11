/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 14:22:28
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-11 16:57:36
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array.ts
 * @Description: This is the monoarray
 */
import { IChart } from '@alvis/charts/chart-visactor/src/index'
import BaseConfig from './baseconfig'
import { checkValue, isNumberArray } from '../utils'

export interface IArrayProps {
  data: number[] | { [key: string]: string | number }[]
  options?: {
    state?: object
    transition?: object
  }
  xField: string
  yField: string
}

export class AlvisArray extends BaseConfig {
  constructor(params: number[] | IArrayProps) {
    super(params)
    this.init(params)
  }

  private init(params: number[] | IArrayProps) {
    let res: Object[], initSpecs: IChart
    let x: string = '',
      y: string = ''
    if (!isNumberArray(params)) {
      const { data, xField, yField } = params
      if (!isNumberArray(data)) {
        res = data
        x = xField
        y = yField
      } else res = data.map((d: number) => ({ key: d, value: d }))
    } else {
      res = params.map((d: number) => ({ key: d, value: d }))
    }
    initSpecs = {
      values: res,
      xField: x || 'key',
      yField: y || 'value'
    }

    this.schema.type = 'array'
    this.schema.initSpec = initSpecs
  }

  push(pushParams: number | object) {
    this.schema.actions.push({ op: 'push', value: checkValue(pushParams) })
  }

  pop() {
    this.schema.actions.push({ op: 'pop' })
  }

  set(setParams: object) {
    this.schema.actions.push({ op: 'set', value: setParams })
  }

  insert(insertData: number | object, place: number) {
    this.schema.actions.push({ op: 'insert', value: checkValue(insertData), place })
  }

  delete(deleteData: object) {
    this.schema.actions.push({ op: 'delete', value: deleteData })
  }
}

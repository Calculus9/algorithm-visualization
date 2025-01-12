/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 14:22:28
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2025-01-12 20:40:24
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\array.ts
 * @Description: This is the monoarray
 */

import { checkValue } from '../../utils'
import { IInitConfigurationProps } from '../index.ts'
import _ from 'lodash'
import { getFields } from '../../utils/fileds.ts'
import { schemaBuilder } from '@alvis/schema/src/builder/schemaBuilder.ts'
import { dataStructureInitPropsMap } from '../init/initMap.ts'
import { handleInitData } from './initData.ts'
import { findEqualObject } from '../util.ts'

export class AlVisArray {
  [key: string]: any
  constructor(dataStructureType: string, config: IInitConfigurationProps) {
    this.init(dataStructureType, config)
    return this.getProxy()
  }

  getDefaultConfig(
    dataStructureType: string,
    config: IInitConfigurationProps
  ): [string, IInitConfigurationProps] {
    if (typeof dataStructureType !== 'string') {
      const tempConfig = dataStructureInitPropsMap?.['array']

      config = _.cloneDeep({
        ...tempConfig,
        data: handleInitData(dataStructureType) as unknown as number[] | string[]
      })
    }

    return ['array', config]
  }

  init(dataStructureType: string, config: IInitConfigurationProps) {
    ;[dataStructureType, config] = this.getDefaultConfig(dataStructureType, config)
    const { data, options } = config ?? {}
    const { fields } = options ?? {}

    const builder = schemaBuilder()
    builder.loadData(data)
    builder.loadChartConfig(config)
    builder.loadBasicProperties(fields, dataStructureType)
    const instance = builder.build()
    this.schema = instance.getSchema()
    this.data = _.cloneDeep(instance.getData())
  }

  getInstance() {
    return this
  }

  get length(): number {
    return this.data.length
  }

  getProxy() {
    const that = this

    return new Proxy(this, {
      get(target, property: string) {
        // if the property is index, get the element

        if (!isNaN(Number(property))) {
          return target.get(property)
        }
        // if the property is method or attribute, return its value
        const value = target?.[property]

        if (typeof value === 'function') {
          // value bind this, to call this func in the proxy
          return value.bind(that)
        }
        return value
      },
      set(target, property: string, value, receiver: any) {
        debugger
        if (!isNaN(Number(property))) {
          // 代理数组元素的设置
          target.set(+property, value)
          return true
        }
        // // 对于类属性的设置操作，使用默认行为
        // target[property] = value;
        return true
      }
    })
  }

  push(pushParams: object | number) {
    const pushData = checkValue(pushParams, this.data.length)
    this.data.push(pushData)
    this.schema.actions.push({ op: 'push', value: pushData })
  }

  unshift(unshiftParams: object | number) {
    const unshiftData = checkValue(unshiftParams, this.data.length)
    this.data.push(unshiftData)
    this.schema.actions.push({ op: 'push', value: unshiftData })
  }

  pop() {
    this.data.pop()
    this.schema.actions.push({ op: 'pop' })
  }
  shift() {
    this.data.shift()
    this.schema.actions.push({ op: 'shift' })
  }

  swap(param1: number, param2: number)
  swap(param1: object, param2: object)
  swap(param1, param2) {
    if (typeof param1 === 'number' && typeof param1 === typeof param2) {
      ;[this.data[param1], this.data[param2]] = [this.data[param2], this.data[param1]]
    } else if (typeof param1 === 'object' && typeof param1 === typeof param2) {
      const index1 = findEqualObject(this.data, param1)
      const index2 = findEqualObject(this.data, param2)
      ;[this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]]
    } else {
      alert('swap function incorrectly called')
      return
    }
    this.schema.actions.push({ op: 'swap', value: _.cloneDeep(this.data) })
  }

  set(params: object | number, value: string) {
    const category = getFields(this.schema, 'category')
    const values = getFields(this.schema, 'value')
    let setParams: object = params as object
    if (!isNaN(+params)) {
      setParams = {
        id: `${value}-${params}`,
        [category]: +params,
        [values]: +value
      }
      this.data[+params] = _.cloneDeep(setParams)
    } else {
      let index = 0
      this.data.map((d: object, i: number) => {
        if (
          (d as { [key: string]: string })?.[category] ===
          (setParams as { [key: string]: string })?.[category]
        ) {
          index = i
          return
        }
      })

      this.data[index] = _.cloneDeep(setParams)
    }
    this.schema.actions.push({ op: 'set', value: setParams })
  }
  get(key: string | number | Symbol) {
    const category = getFields(this.schema, 'category')
    const values = getFields(this.schema, 'value')
    const getObj = this.data.filter((obj: object) => {
      return (obj as { [key: string]: number })?.[category] === +key
    })
    if (!getObj[0]) return

    return (getObj[0] as { [key: string]: number })?.[values]
  }

  insert(insertData: object, place: number) {
    this.data.splice(place, 0, insertData)
    this.schema.actions.push({
      op: 'insert',
      value: checkValue(insertData, this.data.length),
      place
    })
  }

  delete(deleteData: object) {
    const type = Object.keys(deleteData)[0]
    let index = 0
    this.data.map((obj: object, i: number) => {
      if ((obj as { [key: string]: string | number })?.[type] === +Object.values(deleteData)[0])
        index = i
    })
    this.data.splice(index, 1)
    this.schema.actions.push({ op: 'delete', value: deleteData })
  }
}

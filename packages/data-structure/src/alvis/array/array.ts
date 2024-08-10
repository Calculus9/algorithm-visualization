/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 14:22:28
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-08-10 10:17:19
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\array.ts
 * @Description: This is the monoarray
 */

import { checkValue } from '../../utils'
import { IInitConfigurationProps } from '../index.ts'
import _ from 'lodash'
import { getFields } from '../../utils/fileds.ts'
import { schemaBuilder } from '@alvis/schema/src/builder/schemaBuilder.ts'
import { dataStructureInitPropsMap } from '../init/initMap.ts'

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
      config = _.cloneDeep({ ...tempConfig, data: dataStructureType as unknown as number[] })
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
        // 如果属性是索引，代理数组元素的访问
        if (!isNaN(Number(property))) {
          return target.get(property)
        }
        // 如果属性是类的方法或属性，返回其值
        const value = target?.[property]

        if (typeof value === 'function') {
          // 返回方法的绑定版本，使其可以在代理上调用
          return value.bind(that)
        }
        return value
      },
      set(target, property: string, value) {
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
    this.data.push(checkValue(pushParams))
    this.schema.actions.push({ op: 'push', value: checkValue(pushParams) })
  }

  pop() {
    this.data.pop()
    this.schema.actions.push({ op: 'pop' })
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
    this.schema.actions.push({ op: 'insert', value: checkValue(insertData), place })
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

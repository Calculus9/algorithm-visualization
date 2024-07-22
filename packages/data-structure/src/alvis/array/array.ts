/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 14:22:28
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 18:44:41
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\array.ts
 * @Description: This is the monoarray
 */

import { checkValue } from '../../utils'
import { Alvis, IInitConfigurationProps } from '../alvis'
import _ from 'lodash'

export class AlvisArray extends Alvis {
  xField: string
  yField: string;
  [key: string]: any
  constructor(config: IInitConfigurationProps) {
    super('array', config)
    console.log(this.schema)

    // this.schema = new Adapter('array', config).getSchema()
    this.data = _.cloneDeep(this.schema.data)
    this.xField = this.schema?.chartConfig?.visual?.xField || 'key'
    this.yField = this.schema?.chartConfig?.visual?.yField || 'value'
    return this.getProxy()
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

  push(pushParams: object) {
    this.data.push(checkValue(pushParams))
    this.schema.actions.push({ op: 'push', value: checkValue(pushParams) })
  }

  pop() {
    this.data.pop()
    this.schema.actions.push({ op: 'pop' })
  }

  set(params: object | number, value: string) {
    let setParams: object = params as object
    if (typeof +params === 'number') {
      setParams = {
        id: `${value}-${params}`,
        [this.xField]: +params,
        [this.yField]: +value
      }
      this.data[+params] = _.cloneDeep(setParams)
    } else {
      let index = 0
      this.data.map((d, i) => {
        if (
          (d as { [key: string]: string })?.[this.xField] ===
          (setParams as { [key: string]: string })?.[this.xField]
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
    const getObj = this.data.filter(obj => {
      return (obj as { [key: string]: number })?.[this.xField] === +key
    })
    if (!getObj[0]) return

    return (getObj[0] as { [key: string]: number })?.[this.yField]
  }

  insert(insertData: object, place: number) {
    this.data.splice(place, 0, insertData)
    this.schema.actions.push({ op: 'insert', value: checkValue(insertData), place })
  }

  delete(deleteData: object) {
    const type = Object.keys(deleteData)[0]
    let index = 0
    this.data.map((obj, i) => {
      if ((obj as { [key: string]: string | number })?.[type] === +Object.values(deleteData)[0])
        index = i
    })
    this.data.splice(index, 1)
    this.schema.actions.push({ op: 'delete', value: deleteData })
  }
}

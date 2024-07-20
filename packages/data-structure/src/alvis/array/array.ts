/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 14:22:28
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 17:42:30
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\array.ts
 * @Description: This is the monoarray
 */

import { checkValue } from '../../utils'
import { Alvis, IInitConfigurationProps } from '../alvis'
import _ from 'lodash'
import { Adapter } from './adapter'
export class AlvisArray extends Alvis {
  xField: string
  yField: string
  constructor(config: IInitConfigurationProps) {
    super('array', config)
    this.schema = new Adapter('array', config).getSchema()
    this.originData = _.cloneDeep(this.schema.data?.[0]?.values)
    this.xField = this.schema?.chartConfig?.visual?.xField
    this.yField = this.schema?.chartConfig?.visual?.yField
    return this.getProxy()
  }

  getInstance() {
    return this
  }

  get length(): number {
    return this.originData.length
  }

  getProxy() {
    const that = this
    return new Proxy(this, {
      get(target, property) {
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
      set(target, property, value) {
        if (!isNaN(Number(property))) {
          // 代理数组元素的设置
          target.set(property, value)
          return true
        }
        // // 对于类属性的设置操作，使用默认行为
        // target[property] = value;
        return true
      }
    })
  }

  push(pushParams: object) {
    this.originData.push(checkValue(pushParams))
    this.schema.actions.push({ op: 'push', value: checkValue(pushParams) })
  }

  pop() {
    this.originData.pop()
    this.schema.actions.push({ op: 'pop' })
  }

  set(params: object | number, value: string) {
    let setParams = params
    if (typeof params === 'number') {
      setParams = {
        id: `${value}-${params}`,
        [this.xField]: params,
        [this.yField]: +value
      }
      this.originData[params] = _.cloneDeep(setParams)
    } else {
      let index = 0
      this.originData.map((d, i) => {
        if (d[this.xField] === setParams[this.xField]) {
          index = i
          return
        }
      })
      this.originData[index] = _.cloneDeep(setParams)
    }

    this.schema.actions.push({ op: 'set', value: setParams })
  }
  get(key: string | number | Symbol) {
    const getObj = this.originData.filter(obj => {
      return obj[this.xField] === +key
    })
    if (!getObj[0]) return

    return getObj[0][this.yField]
  }

  insert(insertData: number | object, place: number) {
    this.originData.splice(place, 0, insertData)
    this.schema.actions.push({ op: 'insert', value: checkValue(insertData), place })
  }

  delete(deleteData: object) {
    const type = Object.keys(deleteData)[0]
    let index = 0
    this.originData.map((obj, i) => {
      if (obj[type] === +Object.values(deleteData)[0]) index = i
    })
    this.originData.splice(index, 1)
    this.schema.actions.push({ op: 'delete', value: deleteData })
  }
}

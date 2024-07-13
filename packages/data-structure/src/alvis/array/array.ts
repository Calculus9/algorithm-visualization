/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 14:22:28
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-13 15:07:00
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\array\array.ts
 * @Description: This is the monoarray
 */
import { ISchemaProps } from '@alvis/schema/src'
import { checkValue, isNumberArray } from '../../utils'
import { Alvis, IInitConfigurationProps } from '../alvis'

export class AlvisArray extends Alvis {
  constructor(configs: IInitConfigurationProps) {
    super('array', configs)

    this.init(configs)

    return this.getProxy()
  }

  getInstance() {
    return this
  }

  private init(configs: IInitConfigurationProps) {
    const { data, options } = configs

    let res: object[] = data
    if (isNumberArray(data)) {
      res = data.map((d, index) => {
        return {
          key: index,
          value: d
        }
      })
    }

    this.schema = {
      specs: {
        type: 'bar',
        ...options,
        data: [{ id: 'barData', values: res }]
      },
      actions: []
    }
  }

  getProxy() {
    const that = this
    return new Proxy(this, {
      get(target, property) {
        // 如果属性是索引，代理数组元素的访问
        if (!isNaN(Number(property))) {
          target.schema.actions.push({ op: 'get', value: property })
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
          target.schema.actions.push({ op: 'set', value: { key: property, value: value } })
          return true
        }
        // // 对于类属性的设置操作，使用默认行为
        // target[property] = value;
        return true
      }
    })
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

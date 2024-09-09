/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-05 19:21:34
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 10:02:01
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\stack\stack.ts
 * @Description:
 *
 */

import { schemaBuilder } from '@alvis/schema/src/builder/schemaBuilder'
import _ from 'lodash'
import { IInitConfigurationProps } from '..'
import { dataStructureInitPropsMap } from '../init'
import { checkValue } from '../..'
import { handleInitData } from '../array/initData'

class AlVisStack {
  [key: string]: any
  constructor(datastructureType: string, config: IInitConfigurationProps) {
    this.init(datastructureType, config)
    return this.getProxy()
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

  getDefaultConfig(
    dataStructureType: string,
    config: IInitConfigurationProps
  ): [string, IInitConfigurationProps] {
    if (typeof dataStructureType !== 'string') {
      const tempConfig = dataStructureInitPropsMap?.['stack']

      config = _.cloneDeep({
        ...tempConfig,
        data: handleInitData(dataStructureType) as unknown as number[] | string[]
      })
    }

    return ['stack', config]
  }

  init(dataStructureType: string, config: IInitConfigurationProps): void {
    ;[dataStructureType, config] = this.getDefaultConfig(dataStructureType, config)
    const { data, options } = config ?? {}
    const { fields } = options ?? {}
    console.log(config)

    const builder = schemaBuilder()
    builder.loadData(data)
    builder.loadChartConfig(config)
    builder.loadBasicProperties(fields, dataStructureType)
    const instance = builder.build()
    this.schema = instance.getSchema()
    this.data = instance.getData()
  }

  getInstance() {
    return this
  }

  isEmpty(): boolean {
    return this.data.length ? false : true
  }
  get length(): number {
    return this.data.length
  }

  push(pushParams: object) {
    this.data.push(checkValue(pushParams, this.data.length))
    this.schema.actions.push({ op: 'push', value: checkValue(pushParams, this.data.length) })
  }
  pop() {
    this.data.pop()
    this.schema.actions.push({ op: 'pop' })
  }
  top() {
    return this.data[this.data.length - 1].value
  }
  clear() {
    this.data = []
  }
  size() {
    return this.data.length
  }
}

export { AlVisStack }

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
  ): IInitConfigurationProps {
    const tempConfig = dataStructureInitPropsMap?.[dataStructureType]
    config = _.cloneDeep({ ...tempConfig, data: config as unknown as number[] })
    return config
  }

  init(dataStructureType: string, config: IInitConfigurationProps) {
    if (!config?.options) {
      config = this.getDefaultConfig(dataStructureType, config)
    }
    const { data, options } = config ?? {}
    const { fields } = options ?? {}

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

  get isEmpty(): boolean {
    return this.data.length ? false : true
  }

  push(pushParams: object) {
    this.data.push(checkValue(pushParams))
    this.schema.actions.push({ op: 'push', value: checkValue(pushParams) })
  }
  pop() {
    this.data.pop()
    this.schema.actions.push({ op: 'pop' })
  }
  clear() {
    this.data = []
  }
  size() {
    return this.data.length
  }
}

export { AlVisStack }

import { ISchema } from '@alvis/schema/src'
import { isNumberArray } from '../utils/index'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:35:11
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-11 16:36:30
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\baseconfig.ts
 * @Description: BaseConfig class
 */

export default class BaseConfig {
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

  // 组合>继承,lodash

  handleData(params: Array<number | object>) {
    if (!isNumberArray(params)) {
      return params
    } else {
      const objs = params.every((d: number) => ({ key: d, value: d }))
      return objs
    }
  }
}

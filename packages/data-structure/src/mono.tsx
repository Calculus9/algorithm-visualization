import { ISchema } from '@alvis/schema/src/types'
import { isNumberArray } from './utils/index'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:35:11
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-01 18:58:11
 * @FilePath: /algorithm-visualization/packages/data-structure/index.tsx
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

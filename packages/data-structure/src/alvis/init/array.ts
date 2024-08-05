/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-23 16:23:07
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:07:29
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\init\array.ts
 * @Description:
 *
 */

import { IInitConfigurationProps } from '../index'

const initArrayConfigs: IInitConfigurationProps = {
  dataStructureType: 'array',
  data: [],
  options: {
    type: 'bar',
    visual: {},
    fields: {
      category: 'key',
      value: 'value'
    }
  },
  actions: []
}

export { initArrayConfigs }

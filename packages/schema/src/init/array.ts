/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-23 16:23:07
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-05 19:03:35
 * @FilePath: \algorithm-visualization\packages\schema\src\init\array.ts
 * @Description:
 *
 */

import { IInitConfigurationProps } from '@alvis/data-structure/src/index'

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

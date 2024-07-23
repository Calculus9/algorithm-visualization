/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-23 16:23:07
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-23 17:02:12
 * @FilePath: \algorithm-visualization\packages\schema\src\init\array.ts
 * @Description:
 *
 */

import { IInitConfigurationProps } from '@alvis/data-structure/src/alvis/alvis'

const initArrayConfigs: IInitConfigurationProps = {
  dataStructureType: 'array',
  data: [],
  options: {
    type: 'bar',
    visual: {
      xField: 'key',
      yField: 'value'
    }
  },
  actions: []
}

export { initArrayConfigs }

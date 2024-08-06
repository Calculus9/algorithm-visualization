/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-20 13:33:56
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-08-06 22:51:39
 * @FilePath: \algorithm-visualization\packages\data-structure\src\alvis\alvis.ts
 * @Description:
 *
 */
import { IInitConfigurationProps } from './index'
import { AlVisArray } from './array'
import { AlVisStack } from './stack'
class AlVis {
  constructor(type: string, config: IInitConfigurationProps) {
    // according users' demand, init the datastructure and return
    // it doesn't need to care our schema.
    return this.getInstance(type, config)
  }

  getInstance(dataStructureType: string, specs: IInitConfigurationProps) {
    console.log(specs)

    switch (dataStructureType) {
      case 'array':
        return new AlVisArray(dataStructureType, specs)
      case 'stack':
        return new AlVisStack(dataStructureType, specs)
      default:
        throw new Error(`Unknown type: ${dataStructureType}`)
    }
  }
}

export { AlVis }

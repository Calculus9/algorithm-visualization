/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 18:15:02
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-23 17:07:09
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\data\array.ts
 * @Description:
 *
 */

import { IInitConfigurationProps } from '@alvis/data-structure/src/index'
import { ISchemaProps } from '../..'
import { DataStrategy } from './strategy'

class ObjectArrayStrategy implements DataStrategy {
  public generateData(data: IInitConfigurationProps['data']): ISchemaProps['data'] {
    return data as object[]
  }
}

export { ObjectArrayStrategy }

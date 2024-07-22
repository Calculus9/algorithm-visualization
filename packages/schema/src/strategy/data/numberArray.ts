/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 18:19:43
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 18:19:43
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\data\numberArray.ts
 * @Description:
 *
 */
import { IInitConfigurationProps } from '@alvis/data-structure/src/alvis/alvis'
import { ISchemaProps } from '../..'
import { DataStrategy } from './strategy'

class NumberArrayStrategy implements DataStrategy {
  public generateData(data: IInitConfigurationProps['data']): ISchemaProps['data'] {
    return data?.map((d, i) => {
      return {
        key: i,
        value: d
      }
    })
  }
}

export { NumberArrayStrategy }

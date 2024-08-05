import { IInitConfigurationProps } from '@alvis/data-structure/src/index'
import { DataStrategy } from './strategy'
/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-22 16:58:24
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-22 18:47:02
 * @FilePath: \algorithm-visualization\packages\schema\src\strategy\data\context.ts
 * @Description:
 *
 */
class DataContext {
  strategy: DataStrategy
  constructor(strategy: DataStrategy) {
    this.strategy = strategy
  }

  public getData(data: IInitConfigurationProps['data']) {
    return this.strategy?.generateData(data)
  }
}
export { DataContext }

import _ from 'lodash'

/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2025-01-12 19:37:37
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2025-01-12 19:45:26
 * @FilePath: /algorithm-visualization/packages/data-structure/src/alvis/util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const findEqualObject = (data: object[], target: object): number => {
  return data?.findIndex((item: object, index: number) => _.isEqual(item, target))
}

export { findEqualObject }

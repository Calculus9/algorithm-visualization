/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-28 15:59:35
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-28 16:40:17
 * @FilePath: /algorithm-visualization/packages/data-structure/src/datatype.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ISchema {
  init?: Object
  type: string
  actions: Array<{ op: string; value?: Object }>
  // options?:
}[]

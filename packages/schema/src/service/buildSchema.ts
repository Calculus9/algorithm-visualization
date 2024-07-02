/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-02 21:05:29
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-02 21:05:44
 * @FilePath: /algorithm-visualization/packages/schema/src/service/buildSchema.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ISchema } from '../types'
import { MonoArray } from '@alvis/data-structure/src/mono/array.ts'

export const parseCode2Schema = (code: string): ISchema => {
  const func = new Function('MonoArray', code)(MonoArray)
  const schema: ISchema = func().schema
  return schema
}

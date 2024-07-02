/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 18:16:51
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-02 20:19:37
 * @FilePath: /algorithm-visualization/packages/schema/src/index.ts
 * @Description: This file includes the operation of schema
 */

import { ISchema } from './types'
import { MonoArray } from '@alvis/data-structure/src/mono/array.ts'

export const parseCode2Schema = (code: string): ISchema => {
  const func = new Function('MonoArray', code)(MonoArray)
  const schema: ISchema = func().schema
  return schema
}

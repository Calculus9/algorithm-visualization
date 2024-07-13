/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-02 21:05:29
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-13 19:56:50
 * @FilePath: \algorithm-visualization\packages\schema\src\service\buildSchema.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Alvis } from '@alvis/data-structure/src/index'
import { ISchemaProps } from '../types'

export const convertCode2Schema = (code: string): ISchemaProps => {
  let alvis = new Function('Alvis', code)(Alvis)
  alvis = alvis()
  const schema: ISchemaProps = alvis.schema

  return schema
}

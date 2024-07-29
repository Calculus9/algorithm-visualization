/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-29 16:51:45
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-29 16:53:12
 * @FilePath: \algorithm-visualization\packages\data-structure\src\utils\fileds.ts
 * @Description:
 *
 */
import { ISchemaProps } from '@alvis/schema/src'
const getFields = (schema: ISchemaProps, key: string) => {
  const { fields } = schema ?? {}
  return fields[key]
}
export { getFields }

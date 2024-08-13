/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-07-29 16:51:45
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-08-13 23:22:42
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

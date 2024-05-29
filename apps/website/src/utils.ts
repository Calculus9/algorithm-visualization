import { ISchema } from "@mono/data-structure/src/datatype"
import { datastructure2chartType } from "@mono/chart-visactor/src/utils"

/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-29 10:16:48
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-29 11:01:53
 * @FilePath: /algorithm-visualization/apps/website/src/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const getInitSpec = (schema: ISchema) => {
  const { type, init } = schema
  const xField = Object.keys(init?.["values"][0])[0]
  const yField = Object.keys(init?.["values"][0])[1]

  return datastructure2chartType[type](init, xField, yField)
}

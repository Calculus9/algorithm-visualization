/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-28 16:07:50
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-29 10:20:02
 * @FilePath: /algorithm-visualization/packages/chart-visactor/src/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export interface IDataProps {
  id: string
  values: Object[]
}

export interface IChartProps {
  type: string
  data: IDataProps
  xField?: string | Array<string>
  yField?: string | Array<string>
  axes?: Array<Object>
  animationNormal?: Object
}

export const chartBar:IChartProps  = (init: IDataProps, xField: string, yField: string) => {
  return {
    type: "bar",
    data: init,
    xField: xField,
    yField: yField
  }
}

export const chartLine = () => {
  return {
    type: "line"
  }
}

export const chartTree = () => {
  return {
    type:"tree"
  }
}

export const datastructure2chartType = {
  "array": chartBar,
  "tree": chartTree
}

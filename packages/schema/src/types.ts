import { IActions } from '@alvis/exec/src/index'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 18:16:58
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-23 20:16:41
 * @FilePath: \algorithm-visualization\packages\schema\src\types.ts
 * @Description: Here is the defination of schemas.
 */

export interface ISchemaProps {
  dataStructureType: string
  data: object[]
  fields: IFieldsProps
  chartConfig: {
    type: string
    visual?: IVisualProps //Visual Channel, here we will save the property related to data
    layout?: ILayoutProps // The layout of chart,including the direction, title and so on.
    chartFields: IFieldsProps
  }
  actions: IActions[] // actions set
}

export interface IVisualProps {
  [key: string]: any
}

export interface IFieldsProps {
  [key: string]: string
}

export interface ILayoutProps {
  direction?: string
  [key: string]: any
}

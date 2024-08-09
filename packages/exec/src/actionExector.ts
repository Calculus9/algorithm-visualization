import { IActions } from './types'
import VChart from '@visactor/vchart'
import { actionExec } from './generateAction'
import { IChartProps } from '@alvis/charts/index'
import { ISchemaProps } from '@alvis/schema/src'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-12 09:17:40
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 09:57:37
 * @FilePath: \algorithm-visualization\packages\exec\src\actionExector.ts
 * @Description: this is the action execute file.
 */

export class ActionExec {
  spec: IChartProps
  vchart: VChart
  actions: IActions[]
  schema: ISchemaProps
  // this is current operation index
  private index = 0

  constructor(spec: IChartProps, vchart: VChart, actions: IActions[], schema: ISchemaProps) {
    this.spec = spec
    this.vchart = vchart
    this.actions = actions
    this.schema = schema
  }

  exe = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const action = this.actions[this.index]
    const newSpec = actionExec(action, this.spec, this.schema)

    this.vchart.updateSpecSync(newSpec)
    this.vchart.renderAsync()
  }

  exeNext = async () => {
    await this.exe()
    this.index++
  }
  exePre = async () => {
    await this.exe()
    this.index--
  }
}

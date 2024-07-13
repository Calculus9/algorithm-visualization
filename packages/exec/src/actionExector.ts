import { IChartProps } from '@alvis/charts/chart-visactor/src'
import { IActions } from './types'
import VChart, { ISpec } from '@visactor/vchart'
import { actionExec } from './generateAction'
import { ISchemaProps } from '@alvis/schema/src'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-12 09:17:40
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-13 14:49:23
 * @FilePath: \algorithm-visualization\packages\exec\src\actionExector.ts
 * @Description: this is the action execute file.
 */

export class ActionExec {
  spec: ISchemaProps['specs']
  vchart: VChart
  actions: IActions[]
  // this is current operation index
  private index = 0

  constructor(spec: ISchemaProps['specs'], vchart: VChart, actions: IActions[]) {
    this.spec = spec
    this.vchart = vchart
    this.actions = actions
  }

  exe = async () => {
    const action = this.actions[this.index]
    const newSpec = actionExec(action, this.spec)
    await new Promise(resolve => setTimeout(resolve, 1000))
    this.vchart.updateSpecSync(newSpec)
    this.vchart.renderAsync()
  }

  exeNext = async () => {
    await this.exe()
    this.index++
  }
  // 写一个组件
  exePre = async () => {
    await this.exe()
    this.index--
  }
}

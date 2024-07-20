import { IActions } from './types'
import VChart, { ISpec } from '@visactor/vchart'
import { actionExec } from './generateAction'
import { IChartProps } from '@alvis/charts/utils/types'
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-12 09:17:40
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 17:08:00
 * @FilePath: \algorithm-visualization\packages\exec\src\actionExector.ts
 * @Description: this is the action execute file.
 */

export class ActionExec {
  spec: IChartProps
  vchart: VChart
  actions: IActions[]
  // this is current operation index
  private index = 0

  constructor(spec: IChartProps, vchart: VChart, actions: IActions[]) {
    this.spec = spec
    this.vchart = vchart
    this.actions = actions
  }

  exe = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const action = this.actions[this.index]
    const newSpec = actionExec(action, this.spec)
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

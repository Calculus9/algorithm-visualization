import { IChartProps } from '../../chart-visactor/src/types';
import { IActions } from './type';
import VChart from '@visactor/vchart';
import { actionExec } from './index';
/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-06-12 09:17:40
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-06-12 16:28:24
 * @FilePath: /algorithm-visualization/packages/exec/src/actionExec.ts
 * @Description: this is the action execute file.
 */

export class ActionExec{
  spec: IChartProps
  vchart: VChart
  actions: IActions[]
  // this is current operation index
  private index = 0
  constructor(spec: IChartProps, vchart: VChart, actions: IActions[]){
    this.spec = spec
    this.vchart = vchart
    this.actions = actions
  }

  exe = async() => {
    const action = this.actions[this.index]
    const newSpec = actionExec(action, this.spec)
    await new Promise(resolve => setTimeout(resolve, 1000))
    this.vchart.updateSpecSync(newSpec)
    this.vchart.renderAsync()
  }

  exeNext = async() => {
    await this.exe()
    this.index ++;
  }



  exePre = async () => {
    await this.exe()
    this.index --;
  }

}
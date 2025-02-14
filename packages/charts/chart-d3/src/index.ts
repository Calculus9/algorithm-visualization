/*
 * @Author: 1441211576@qq.com huangjingyu@kuaishou.com
 * @Date: 2025-02-13 14:34:29
 * @LastEditors: 1441211576@qq.com huangjingyu@kuaishou.com
 * @LastEditTime: 2025-02-14 11:38:18
 * @FilePath: /algorithm-visualization/packages/charts/chart-d3/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IChartProps } from '../../utils/types'
import { ID3ChartConfigProps } from '../type'
import {
  initChartConfig,
  initContainer,
  addGroup,
  initSvg,
  calculateInnerRect
} from '../utils/init'
import { dataStructureMap } from '../dataStructureMapping'
import { renderScale } from './stack/stackGroup'
import { renderMapping } from '../utils/render'
import { parseSpec2Data } from '../utils/parse'
export class D3Chart {
  spec: IChartProps
  dom: string
  chartConfig: ID3ChartConfigProps
  container: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>
  dataStructure: string
  groups: {}
  data: object[] | number[]
  yField: string
  scales: {}
  innerRect: {}
  constructor(spec: IChartProps, dom: { dom: string }) {
    this.spec = spec
    this.dataStructure = spec?.dataStructure
    this.dom = dom.dom
    this.data = parseSpec2Data(spec)
    this.yField = spec?.yField

    this.init()
    this.renderAsync()
  }
  init() {
    this.chartConfig = initChartConfig(this.spec)
    this.container = initContainer(this.dom, this.chartConfig)
    this.svg = initSvg(this.container)
    this.innerRect = calculateInnerRect(this.container, this.chartConfig)
    this.initGroup()
  }

  initGroup() {
    this.groups = {}
    dataStructureMap?.[this.dataStructure]?.map((d: string, index: number) => {
      this.groups[`${d}Group`] = addGroup(this.svg)
    })
  }

  /**
   * 更新配置
   */
  updateSpecSync(newSpec: IChartProps) {
    // 处理相关数据
    this.renderAsync()
  }

  renderAsync() {
    this.scales = renderScale(this.data, this.innerRect, this.yField)
    Object.entries(this.groups).map((d: any, index: number) => {
      const [key, group] = d
      renderMapping[key](group, this.data, this.innerRect, this.scales?.[key], this.chartConfig)
    })
  }

  release() {
    Object.entries(this.groups).map((d: any, index: number) => {
      const [key, group] = d
      group.remove()
    })
  }
}

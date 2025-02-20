import * as d3 from 'd3'
import { IChartProps } from '../../../utils/types'
import { parseSpec2Data } from '../parse'
import { ID3ChartConfigProps } from '../../type'

export const renderRectGroup = (
  group: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
  data: IChartProps['data'],
  innerRect: any,
  scale: d3.ScaleBand<any>,
  chartConfig: ID3ChartConfigProps
) => {
  const { duration, colors } = chartConfig
  const { primary, secondary } = colors

  group.call(g => {
    const rects = g
      .selectAll('rect')
      .data(
        data as
          | object[]
          | Iterable<object>
          | d3.ValueFn<SVGGElement, unknown, object[] | Iterable<object>>,
        (d, index) => index
      )
    // 进入操作：创建新的 rect 元素
    rects
      .enter()
      .append('rect')
      .attr('x', innerRect.innerLeft)
      .attr('height', scale.bandwidth())
      .attr('y', scale.bandwidth())
      .attr('fill', primary)
      .attr('width', innerRect.innerWidth)
      .transition()
      .ease(d3.easeCubic)
      .duration(duration)
      .attr('y', (d, index) => scale(index) ?? 0)
      .attr('height', scale.bandwidth())

    // 更新操作：更新现有 rect 元素
    rects
      .transition()
      .ease(d3.easeCubic)
      .duration(duration)
      .attr('x', innerRect.innerLeft)
      .attr('y', (d, index) => scale(index) ?? 0)
      .attr('fill', primary)
      .attr('width', innerRect.innerWidth)
      .attr('height', scale.bandwidth())

    // 退出操作：移除多余的 rect 元素
    rects
      .exit()
      .transition()
      .ease(d3.easeCubic)
      .duration(duration)
      .attr('y', -innerRect.innerTop)
      .attr('height', innerRect.innerTop)
      .remove()
  })
}

import { IChartProps } from '../../../utils/types'
import { ID3ChartConfigProps } from '../../type'
import { getField, parseSpec2Data } from '../parse'
import * as d3 from 'd3'
export const renderTextGroup = (
  group: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
  data: IChartProps['data'],
  innerRect: any,
  scale: d3.ScaleBand<any>,
  chartConfig: ID3ChartConfigProps
) => {
  const { duration, colors, yField: field = '' } = chartConfig
  const { primary, secondary } = colors

  group.call(g => {
    const rects = g.selectAll('text').data(data as any[], (d, index) => {
      return d?.[field] ?? 0
    })
    // 创建
    rects
      .enter()
      .append('text')
      .attr('y', 0)
      .attr('x', () => innerRect.innerLeft)
      .attr('dx', () => innerRect.innerWidth / 2)
      .transition()
      .ease(d3.easeCubic)
      .duration(duration)
      .attr('dx', () => innerRect.innerLeft / 2)
      .attr('y', (d, index) => scale(index) ?? 0)
      .attr('dy', (d, index) => scale.bandwidth() ?? 0)
      .attr('fill', secondary)
      .selection()
      .html(d => {
        return d?.[field] ?? 0
      })

    // 更新
    rects
      .transition()
      .duration(duration)
      .attr('x', () => innerRect.innerLeft)
      .attr('dx', () => innerRect.innerWidth / 2)
      .attr('y', (d, index) => scale(index) ?? 0)
      .attr('dy', () => scale.bandwidth() / 2)
      .attr('fill', secondary)
      .selection()
      .html(d => {
        return d?.[field] ?? 0
      })

    // rects
    //   .transition()
    //   .ease(d3.easeCubic)
    //   .duration(duration)
    //   .attr('y', -innerRect.innerTop / 2)
    //   .attr('dy', innerRect.innerTop / 2)
    //   .remove()
  })
}

import { IChartProps } from '../../../utils/types'
import { ID3ChartConfigProps } from '../../type'

export const renderContainerGroup = (
  group: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
  spec: IChartProps,
  innerRect: any,
  scale: d3.ScaleBand<any>,
  chartConfig: ID3ChartConfigProps
) => {
  const { duration, colors, border } = chartConfig
  const { width, type, color } = border

  const points = [
    [innerRect.innerLeft, innerRect.innerTop].join(' '),
    [innerRect.innerLeft, innerRect.innerBottom].join(' '),
    [innerRect.innerRight, innerRect.innerBottom].join(' '),
    [innerRect.innerRight, innerRect.innerTop].join(' ')
  ].join(',')

  group
    .selectAll('polyline')
    .data([points])
    .join('polyline')
    .transition()
    .duration(duration)
    .attr('points', d => d)
    .attr('fill', 'transparent')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-width', width)
    .attr('stroke-linecap', 'round')
    .attr('stroke', color)
}

/**
 * D3图表初始化
 *
 * 1. 处理图表配置(没有则使用默认的，margin、height、innerHeight等等)
 * 2. 容器初始化：提供svg、rectGroup、textGroup、axis的生成方法，builder模式根据图表类型来初始化图表相关容器
 * 3. 比例尺映射：根据现有数据指定对应的比例尺，并映射坐标轴
 *
 * D3 Chart initialization: Initialize chart related configuration
 * 1. Process chart configuration (use default if none, margin, height, innerHeight, etc.)
 * 2. Container initialization: Provides methods for generating svg, rectGroup, textGroup, and axis. The builder mode initializes chart-related containers according to the chart type.
 * 3. Scale mapping: Specify the corresponding scale according to the existing data and map the coordinate axis
 */
import * as d3 from 'd3'
import { IChartProps } from '../../utils/types'
import { ID3ChartConfigProps } from '../type'

const initChartConfig = (spec: IChartProps): ID3ChartConfigProps => {
  const {
    width = 250,
    height = 500,
    margin,
    innerHeight = 10,
    innerWidth = 10,
    zIndex = 1,
    position = 'relative',
    padding,
    duration = 2000,
    border,
    colors = { primary: '#165DFF', secondary: '#BEDAFF', ternary: '#E8F3FF' },
    xField,
    yField
  } = spec
  const { top = 50, bottom = 5, left = 5, right = 5 } = margin ?? {}
  const { top1 = 0, bottom1 = 0, left1 = 0, right1 = 0 } = padding ?? {}
  const { width1 = 5, type = 'solid', color = 'darkgray' } = border ?? {}
  return {
    width,
    height,
    margin: {
      top,
      bottom,
      left,
      right
    },
    innerHeight,
    innerWidth,
    zIndex,
    position,
    padding: {
      top: top1,
      bottom: bottom1,
      left: left1,
      right: right1
    },
    duration,
    border: {
      width: width1,
      type,
      color
    },
    colors,
    xField,
    yField
  }
}

const calculateInnerRect = (
  root: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>,
  chartConfig: ID3ChartConfigProps
) => {
  const rootRect = (root.node() as HTMLDivElement).getBoundingClientRect()
  const { padding = { top: 0, left: 0, right: 0, bottom: 0 } } = chartConfig
  const width = rootRect.width - padding.left - padding.right
  const height = rootRect.height - padding.top - padding.bottom

  return {
    innerTop: padding.top,
    innerRight: padding.left + width,
    innerBottom: padding.top + height,
    innerLeft: padding.left,
    innerWidth: width,
    innerHeight: height,
    innerCenter: [padding.left + width / 2, padding.top + height / 2]
  }
}

const initContainer = (
  dom: string,
  chartConfig: ID3ChartConfigProps
): d3.Selection<HTMLDivElement, unknown, HTMLElement, any> => {
  const { height, width, position, zIndex, margin } = chartConfig
  const { top, bottom, left, right } = margin

  const container: d3.Selection<HTMLDivElement, unknown, HTMLElement, any> = d3
    .select(`#${dom}`)
    .append('div')
    .style('height', `${height}px`)
    .style('width', `${width}px`)
    .style('position', position)
    .style('z-index', zIndex)
    .style('top', `${top}px`)
    .style('bottom', `${bottom}px`)
    .style('left', `${left}px`)
    .style('right', `${right}px`)
  return container
}

const initSvg = (
  root: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>
): d3.Selection<SVGSVGElement, unknown, HTMLElement, any> => {
  const rect = (root.node() as HTMLDivElement).getBoundingClientRect()
  const svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any> = root
    .append('svg')
    .attr('viewBox', [0, 0, rect?.width, rect?.height])
    .style('width', '100%')
    .style('height', '100%')
  return svg
}

const addGroup = (
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>
): d3.Selection<SVGGElement, unknown, HTMLElement, any> => {
  const group = svg.append('g')
  return group
}

export { initChartConfig, initContainer, initSvg, addGroup, calculateInnerRect }

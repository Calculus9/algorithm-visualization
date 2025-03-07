let stackGroups = ['Rect', 'Text', 'Container']
import * as d3 from 'd3'
const renderScale = (data: object[] | number[], innerRect: any, yField: string) => {
  const yScale = d3
    .scaleBand(data.map((d, index) => index).reverse(), [innerRect.innerTop, innerRect.innerBottom])
    .paddingInner(0.1)

  return {
    RectGroup: yScale,
    TextGroup: yScale
  }
}
export { stackGroups, renderScale }

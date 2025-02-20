/**
 * 图表渲染
 * 1. 分别提供rect、link、node的渲染
 *
 * Render
 * 1.Provides rendering of rect, link, and node respectively
 */

import { renderTextGroup } from './text'
import { renderRectGroup } from './rect'
import { renderContainerGroup } from './container'

const renderMapping = {
  RectGroup: renderRectGroup,
  TextGroup: renderTextGroup,
  ContainerGroup: renderContainerGroup
}

export { renderMapping }

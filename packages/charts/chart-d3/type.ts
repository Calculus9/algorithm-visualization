/*
 * @Author: 1441211576@qq.com huangjingyu@kuaishou.com
 * @Date: 2025-02-13 16:15:47
 * @LastEditors: 1441211576@qq.com huangjingyu@kuaishou.com
 * @LastEditTime: 2025-02-13 18:07:17
 * @FilePath: /algorithm-visualization/packages/charts/chart-d3/type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ID3ChartConfigProps {
  width: number
  height: number
  margin: {
    top: number
    bottom: number
    left: number
    right: number
  }
  innerHeight: number
  innerWidth: number
  zIndex: number
  position: string
  padding: {
    top: number
    bottom: number
    left: number
    right: number
  }
  duration: number
  border: {
    width: number
    color: string
    type: string
  }
  colors: {
    primary: string
    secondary: string
    ternary: string
  }
  xField?: string
  yField?: string
}

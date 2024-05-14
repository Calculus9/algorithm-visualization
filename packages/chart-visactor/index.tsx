/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:35:11
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-14 10:41:23
 * @FilePath: /algorithm-visualization/packages/data-structure/index.tsx
 * @Description: visactor index
 */
import React from "react"


interface IProps {
  text: string
}
const ChartVisactor = (props: IProps) => {
  const { text } = props
  return <div>{text}接入成功</div>
}

export default ChartVisactor

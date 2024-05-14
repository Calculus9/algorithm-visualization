/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:32:05
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-14 10:47:41
 * @FilePath: /algorithm-visualization/packages/render/index.tsx
 * @Description: render index
 */
import React from "react"


interface IProps {
  text: string
}
const Render = (props: IProps) => {
  const { text } = props
  return <div>{text}</div>
}

export default Render

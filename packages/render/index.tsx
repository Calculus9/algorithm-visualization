/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 10:32:05
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-05-14 10:32:06
 * @FilePath: /algorithm-visualization/packages/render/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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

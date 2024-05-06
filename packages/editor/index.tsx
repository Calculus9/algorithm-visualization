import React from 'react'
interface IProps {
  text: string
}
const Editor = (props: IProps) => {
  const { text } = props
  return <div>{text}</div>
}

export default Editor

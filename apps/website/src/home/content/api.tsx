import { Typography } from '@arco-design/web-react'
import Paragraph from '@arco-design/web-react/es/Typography/paragraph'
import Title from '@arco-design/web-react/es/Typography/title'
import React from 'react'

export const ContentApi = () => {
  return (
    <>
      <Typography>
        <Title>API</Title>
        <Paragraph>
          According to my design goals, before the algorithm can be visualized, the data structure
          needs to be visualized firstly. I have listed the data structures and interfaces I have
          implemented. Here you can intuitively understand how to use each interface. In most cases,
          the execution of each line of code is animated to help you understand the change in
          structure.
        </Paragraph>
      </Typography>
      <div>
        map一下
      </div>
    </>
  )
}

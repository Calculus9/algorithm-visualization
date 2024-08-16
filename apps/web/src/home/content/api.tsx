/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-08 15:50:13
 * @FilePath: \algorithm-visualization\apps\website\src\home\content\api.tsx
 * @Description:
 *
 */
import { Typography } from '@arco-design/web-react'
import Paragraph from '@arco-design/web-react/es/Typography/paragraph'
import Title from '@arco-design/web-react/es/Typography/title'
import React from 'react'
import { useI18n } from 'rspress/runtime'

export const ContentApi = () => {
  const t = useI18n()
  const api = t('api')

  return (
    <>
      <Typography>
        <Title>{api.title}</Title>
        <Paragraph>{api.content}</Paragraph>
      </Typography>
      <div>map一下</div>
    </>
  )
}

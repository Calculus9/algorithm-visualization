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
import { useTranslation } from 'react-i18next'

export const ContentApi = () => {
  const { t } = useTranslation()
  return (
    <>
      <Typography>
        <Title>{t('api.title')}</Title>
        <Paragraph>{t('api.content')}</Paragraph>
      </Typography>
      <div>map一下</div>
    </>
  )
}

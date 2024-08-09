/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-09 11:13:50
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 15:13:36
 * @FilePath: \algorithm-visualization\apps\website\src\gallery\content\content.tsx
 * @Description:
 *
 */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { ContentCard } from './content_card'

export const GalleryContent = () => {
  const { t } = useTranslation()
  const algorithmList = t('gallery.algorithmList', { returnObjects: true })

  return (
    <div>
      {(algorithmList as [])?.map((item: { title: string; algorithms: [] }, type: number) => {
        return (
          <div id={`${item?.title}`}>
            <h3>{item?.title}</h3>
            <div style={{ marginTop: 20, display: 'flex' }}>
              {item?.algorithms?.map((name: string, id: any) => {
                return <ContentCard name={name} type={type} num={id} />
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

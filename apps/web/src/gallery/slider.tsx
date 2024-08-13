/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-09 11:11:39
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 15:57:13
 * @FilePath: \algorithm-visualization\apps\website\src\gallery\slider.tsx
 * @Description:
 *
 */

import { Link, Menu } from '@arco-design/web-react'

import React from 'react'
import { useTranslation } from 'react-i18next'
const MenuItem = Menu.Item
const GallerySlider = () => {
  const { t } = useTranslation()
  const algorithmList = t('gallery.algorithmList', { returnObjects: true })

  return (
    <Menu defaultSelectedKeys={['0']} style={{ width: '100%', margin: 0, padding: 0 }}>
      {(algorithmList as [])?.map(
        (
          item: {
            title: string
            algorithms: string[]
          },
          index: number
        ) => {
          return (
            <MenuItem key={`${index}`}>
              <Link
                style={{ width: '100%', height: '100%', marginLeft: 10 }}
                href={`#${item.title}`}
              >
                {item?.title}
              </Link>
            </MenuItem>
          )
        }
      )}
    </Menu>
  )
}

export { GallerySlider }

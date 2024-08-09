/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-09 11:11:39
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 11:32:05
 * @FilePath: \algorithm-visualization\apps\website\src\gallery\slider.tsx
 * @Description:
 *
 */

import { Menu, Message } from '@arco-design/web-react'

import { IconCalendar } from '@arco-design/web-react/icon'
import React from 'react'
import { useTranslation } from 'react-i18next'
const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

const GallerySlider: React.FC<{ onClick: (code: string) => void }> = ({ onClick }) => {
  const { t } = useTranslation()
  const algorithmList = t('gallery.algorithmList', { returnObjects: true })

  return (
    <Menu
      defaultOpenKeys={['0']}
      defaultSelectedKeys={['0_0']}
      onClickMenuItem={key => {
        onClick(key)
      }}
      style={{ width: '100%' }}
    >
      {(algorithmList as [])?.map(
        (
          item: {
            title:
              | string
              | number
              | boolean
              | React.ReactElement<any, string | React.JSXElementConstructor<any>>
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Iterable<React.ReactNode>
              | null
              | undefined
            algorithms: string[]
          },
          index: number
        ) => {
          return (
            <SubMenu
              key={`${index}`}
              title={
                <span>
                  <IconCalendar />
                  {item?.title}
                </span>
              }
            >
              {item?.algorithms?.map((name: string, id: number) => {
                return <MenuItem key={`${index}_${id}`}>{name}</MenuItem>
              })}
            </SubMenu>
          )
        }
      )}
    </Menu>
  )
}

export { GallerySlider }

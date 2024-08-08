/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-06 16:12:25
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-08-08 22:58:34
 * @FilePath: \algorithm-visualization\apps\website\src\home\top\pageHeader.tsx
 * @Description:
 *
 */
import { PageHeader, Menu } from '@arco-design/web-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useThemeStore, usePageStore, useLngStore } from '../../store/create'
const MenuItem = Menu.Item
import { ZhIMG, ENIMG } from '../../constant.tsx'

const MenuRoute = () => {
  const { t } = useTranslation()
  const menuList = t('menuList', { returnObjects: true })

  const themeColor = useThemeStore(state => state.themeColor)
  const page = usePageStore(state => state.page)

  const setPage = usePageStore(state => state.setPage)
  const navigate = useNavigate()

  const lng = useLngStore(state => state.lng)
  const setLng = useLngStore(state => state.setLng)

  return (
    <div style={{ background: 'var(--color-fill-2)' }}>
      <PageHeader
        style={{ background: 'var(--color-bg-2)' }}
        title={<div style={{ color: themeColor }}>[̲̅A̲̲̅̅l̲̲̅̅V̲̲̅̅i̲̲̅̅s̲̅</div>}
        subTitle={
          <Menu
            style={{ width: '300px' }}
            mode='horizontal'
            // defaultSelectedKeys={[page]}
            selectedKeys={[page]}
            color={themeColor}
          >
            {(menuList as [])?.map(
              (item: { key: string; value: string; index: string }, index: number) => {
                return (
                  <MenuItem
                    key={`${index}`}
                    onClick={() => {
                      setPage(item?.index)
                      navigate(item?.key)
                    }}
                  >
                    {item?.value}
                  </MenuItem>
                )
              }
            )}
          </Menu>
        }
        extra={
          <div onClick={() => setLng(!lng as unknown as number)}>{lng ? <ZhIMG /> : <ENIMG />}</div>
        }
      />
    </div>
  )
}

export default MenuRoute

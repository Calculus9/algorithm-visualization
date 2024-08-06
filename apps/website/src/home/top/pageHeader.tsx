/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-06 16:12:25
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-08-06 23:19:38
 * @FilePath: \algorithm-visualization\apps\website\src\home\top\pageHeader.tsx
 * @Description:
 *
 */
import { PageHeader, Menu } from '@arco-design/web-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { MenuList } from '../../constant'
import { useTranslation } from 'react-i18next'
const MenuItem = Menu.Item

const MenuRoute = () => {
  const { t } = useTranslation()
  const menuList = t('menulist', { returnObjects: true })
  return (
    <div style={{ background: 'var(--color-fill-2)' }}>
      <PageHeader
        style={{ background: 'var(--color-bg-2)' }}
        title={<div style={{ color: '#165dff' }}>[̲̅A̲̲̅̅l̲̲̅̅V̲̲̅̅i̲̲̅̅s̲̅</div>}
        subTitle={
          <Menu
            style={{ width: '300px' }}
            mode='horizontal'
            defaultSelectedKeys={['1']}
            onClickMenuItem={a => {
              console.log(a)
            }}
          >
            {menuList?.map((item: { key: string; value: string }, index: number) => {
              return (
                <MenuItem key={index}>
                  <Link to={item?.key}>{item?.value}</Link>
                </MenuItem>
              )
            })}
          </Menu>
        }
        extra={<div>国际化+github</div>}
      />
    </div>
  )
}

export default MenuRoute

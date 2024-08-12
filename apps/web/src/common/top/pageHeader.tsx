/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-06 16:12:25
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 10:50:36
 * @FilePath: \algorithm-visualization\apps\website\src\common\top\pageHeader.tsx
 * @Description:
 *
 */
import { PageHeader, Menu, Link, Dropdown } from '@arco-design/web-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useThemeStore, usePageStore, useLngStore } from '../../store/create.ts'
const MenuItem = Menu.Item
import { ZhIMG, GITHUBICON } from '../../constant.tsx'
import { LANGUAGES } from './constants.ts'

const MenuRoute = () => {
  const { t, i18n } = useTranslation()
  const menuList = t('menuList', { returnObjects: true })

  const themeColor = useThemeStore(state => state.themeColor)
  const titleColor: string = useThemeStore(state => state.titleBachgroundColor)
  const contentBgcColor: string = useThemeStore(state => state.contentBackgroundColor)

  const page = usePageStore(state => state.page)
  const setPage = usePageStore(state => state.setPage)

  const navigate = useNavigate()

  const droplist = (
    <Menu>
      {LANGUAGES?.map((item: { key: string; value: string }) => {
        return (
          <Menu.Item
            onClick={() => {
              i18n.changeLanguage((i18n.language = item?.value))
            }}
            key={item?.value}
          >
            {item?.key}
          </Menu.Item>
        )
      })}
    </Menu>
  )

  return (
    <div style={{ background: titleColor }}>
      <PageHeader
        style={{ background: contentBgcColor }}
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
          <>
            <Dropdown droplist={droplist} position='bl'>
              <span>{<ZhIMG />}</span>
            </Dropdown>
            <span style={{ marginLeft: 10 }}>
              <Link href='https://github.com/Calculus9/algorithm-visualization'>
                {<GITHUBICON />}
              </Link>
            </span>
          </>
        }
      />
    </div>
  )
}

export default MenuRoute

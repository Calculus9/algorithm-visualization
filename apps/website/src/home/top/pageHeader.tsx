/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-06 16:12:25
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-06 20:19:19
 * @FilePath: \algorithm-visualization\apps\website\src\home\top\pageHeader.tsx
 * @Description:
 *
 */
import { PageHeader, Menu } from '@arco-design/web-react'
import React from 'react'
import { Link } from 'react-router-dom'
const MenuItem = Menu.Item

const MenuRoute = () => {
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
            <MenuItem key='1'>
              <Link to={'/'}>Home</Link>
            </MenuItem>
            <MenuItem key='2'>
              <Link to={'/api'}>API</Link>
            </MenuItem>
            <MenuItem key='3'>
              <Link to={'/gallery'}>Gallery</Link>
            </MenuItem>
          </Menu>
        }
        extra={<div>国际化+github</div>}
      />
    </div>
  )
}

export default MenuRoute

// import Editor from '@mono/editor'
import { Layout } from '@arco-design/web-react'
import { Menu } from '@arco-design/web-react'

import { MenuList } from './constant'
import { useEffect, useState } from 'react'
import React from 'react'
import { Home } from './home'
const MenuItem = Menu.Item
const Header = Layout.Header

function App() {
  const [curMenu, setMenu] = useState('Home')
  // const [curPage, setCurPage] = useState("Home")

  useEffect(() => {}, [curMenu])

  return (
    <>
      <div style={{ background: 'var(--color-fill-2)' }}>
        <Layout>
          <Header>
            <div
              style={{
                background: 'var(--color-fill-2)'
              }}
            >
              <div className='menu-demo'>
                <Menu
                  mode='horizontal'
                  defaultSelectedKeys={['Home']}
                  onClickMenuItem={(key: string) => {
                    setMenu(key)
                  }}
                >
                  {MenuList?.map(d => {
                    return <MenuItem key={d}>{d}</MenuItem>
                  })}
                </Menu>
              </div>
            </div>
          </Header>
        </Layout>
        <Home />
        {/* <Api /> */}
        {/* <Editor text='Monorepo搭建成功' /> */}
      </div>
    </>
  )
}

export default App

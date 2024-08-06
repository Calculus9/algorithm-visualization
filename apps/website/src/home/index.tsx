/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-06 19:56:55
 * @FilePath: \algorithm-visualization\apps\website\src\home\index.tsx
 * @Description:
 *
 */
import React from 'react'
import HomeTop from './top/index.tsx'
import HomeContent from './content/index.tsx'
import { AlVisEditor } from '../index.ts'
import { Divider, Layout } from '@arco-design/web-react'
const { Content } = Layout
export const Home = () => {
  return (
    <>
      <Layout>
        <HomeTop />
        <Content
          style={{
            padding: '0 70px',
            backgroundColor: 'var(--color-fill-2)'
          }}
        >
          <Divider />
          <AlVisEditor />
          <HomeContent />
        </Content>
      </Layout>
    </>
  )
}

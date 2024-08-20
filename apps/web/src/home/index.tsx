/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 10:16:35
 * @FilePath: \algorithm-visualization\apps\website\src\home\index.tsx
 * @Description:
 *
 */
import React from 'react'
import HomeTop from '../common/top/index.tsx'
import HomeContent from './content/index.tsx'
import { AlVisEditor } from '../index.ts'
import { Divider, Layout } from '@arco-design/web-react'
const { Content } = Layout
export const Home = () => {
  return (
    <>
      <Layout>
        <HomeTop />
        <Content>
          <Divider />
          <div style={{ padding: '0 200px' }}>
            <AlVisEditor />
          </div>
          <HomeContent />
        </Content>
      </Layout>
    </>
  )
}

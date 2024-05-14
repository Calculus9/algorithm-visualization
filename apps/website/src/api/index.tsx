import { Layout } from '@arco-design/web-react'
import React from 'react'

const Sider = Layout.Sider
const Footer = Layout.Footer
const Content = Layout.Content

const Api = () => {
  return (
    <>
      <Layout style={{ padding: '10px', height: 500 }}>
        <Sider>Sider</Sider>
        <Content style={{ marginLeft: 10, background: 'var(--color-bg-2)' }}>Content</Content>
        <Content style={{ marginLeft: 10, background: 'var(--color-bg-2)' }}>Content</Content>
      </Layout>
      <Layout style={{ padding: '10px' }}>
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}

export default Api

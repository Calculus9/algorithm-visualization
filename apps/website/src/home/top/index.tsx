import { Layout, Typography, Divider, Space, Button } from '@arco-design/web-react'
import Content from '@arco-design/web-react/es/Layout/content'
import Paragraph from '@arco-design/web-react/es/Typography/paragraph'
import Title from '@arco-design/web-react/es/Typography/title'
import React from 'react'

const HomeTop = () => {
  return (
    <Layout style={{ padding: '10px', height: 200 }}>
      <Content style={{ textAlign: 'center' }}>
        <Typography style={{ paddingTop: 10 }}>
          <Title>Algorithm-visualization</Title>
          <Paragraph type='secondary'>Finite Datastrues & Infinite Algorithms.</Paragraph>
        </Typography>
        <Divider />
        <div>
          <Space>
            <Button shape='round' type='outline' size='large'>
              DataStructures
            </Button>
            <Button shape='round' type='outline' size='large'>
              Algorithms
            </Button>
          </Space>
        </div>
      </Content>
    </Layout>
  )
}
export default HomeTop

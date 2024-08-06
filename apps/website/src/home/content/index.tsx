import { Divider, Layout, Typography } from '@arco-design/web-react'
import { Grid } from '@arco-design/web-react'
import Paragraph from '@arco-design/web-react/es/Typography/paragraph'
import Title from '@arco-design/web-react/es/Typography/title'
import React from 'react'
import { ContentApi } from './api'
import { ContentDataStructure } from './datastructure'
import { ContentAlgorithmGallery } from './algorithmgallery'
import { AlVisEditor } from '../..'

const Row = Grid.Row
const Col = Grid.Col

const { Content } = Layout

const HomeContent = () => {
  return (
    <>
      <Layout>
        <Content style={{ backgroundColor: 'white', marginTop: 10 }}>
          <Row>
            <Col span={4}>
              <div></div>
            </Col>
            <Col span={16}>
              {/* Design Goal */}
              <Typography>
                <Title>Design Goal</Title>
                <Paragraph>
                  My main goal is algorithm visualization, but it is not easy to visualize the
                  execution process of the Algorithm. I try to find a general solution. After a lot
                  of exploration, suddenly on that day, I realized! To visualize the Algorithm, must
                  visualize the Data Structure that the Algorithm depends on!
                </Paragraph>
              </Typography>

              <Divider />
              <ContentApi />

              <Divider />
              <ContentDataStructure />

              <Divider />
              <ContentDataStructure />

              <Divider />
              <ContentAlgorithmGallery />
            </Col>
            <Col span={4}>
              <div></div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  )
}

export default HomeContent

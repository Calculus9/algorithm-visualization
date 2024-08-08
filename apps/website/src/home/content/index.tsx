import { Divider, Layout, Typography } from '@arco-design/web-react'
import { Grid } from '@arco-design/web-react'
import Paragraph from '@arco-design/web-react/es/Typography/paragraph'
import Title from '@arco-design/web-react/es/Typography/title'
import React from 'react'
import { ContentApi } from './api'
import { ContentAlgorithmGallery } from './algorithmgallery'

import { useTranslation } from 'react-i18next'

const Row = Grid.Row
const Col = Grid.Col

const { Content } = Layout

const HomeContent = () => {
  const { t } = useTranslation()
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
                <Title>{t('designGoal.title')}</Title>
                <Paragraph>{t('designGoal.content')}</Paragraph>
              </Typography>

              <Divider />
              <ContentApi />

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

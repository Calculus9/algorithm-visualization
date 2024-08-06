import { Typography, Button, Layout, Grid } from '@arco-design/web-react'
import Paragraph from '@arco-design/web-react/es/Typography/paragraph'
import Title from '@arco-design/web-react/es/Typography/title'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const { Header } = Layout
const Row = Grid.Row
const Col = Grid.Col
const HomeTop = () => {
  const navigate = useNavigate()

  const handleClick = useCallback((e: Event) => {
    console.log(e.target)

    navigate(e?.target?.value)
  }, [])

  const menuButton = [
    {
      key: 'APIs',
      value: 'api'
    },
    // {
    //   key: 'Algorithms',
    //   value: 'algorithm'
    // },
    {
      key: 'Gallerys',
      value: 'gallery'
    }
  ]
  return (
    <div style={{ backgroundColor: 'var(--color-fill-2)' }}>
      <Layout>
        <Header
          style={{
            padding: 20
          }}
        >
          <Row style={{ display: 'flex', alignItems: 'center' }}>
            <Col span={4}></Col>
            <Col span={7}>
              <Typography>
                <Title style={{ fontSize: 50, wordBreak: 'keep-all', fontWeight: 'bolder' }}>
                  An algorithm visualization library based on schema.
                </Title>
                <Paragraph type='secondary' style={{ fontSize: 22 }}>
                  Finite DataStructures & Infinite Algorithms.
                </Paragraph>
              </Typography>
              <div style={{ paddingBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
                {menuButton?.map(item => {
                  return (
                    <Button
                      shape='round'
                      type='outline'
                      size='large'
                      onClick={handleClick}
                      key={item.value}
                      value={item.value}
                    >
                      {item.key}
                    </Button>
                  )
                })}
              </div>
            </Col>
            <Col span={1}></Col>
            <Col span={8} style={{ height: '100%' }}>
              <div
                style={{
                  fontSize: 55,
                  color: '#165dff'
                }}
              >
                <div>[̲̅A̲̲̅̅l̲̲̅̅g̲̲̅̅o̲̲̅̅r̲̲̅̅i̲̲̅̅t̲̲̅̅h̲̲̅̅m̲̅</div>
                <div style={{ paddingLeft: 150 }}>V̲̲̅̅i̲̲̅̅s̲̲̅̅u̲̲̅̅a̲̲̅̅l̲̲̅̅i̲̲̅̅z̲̲̅̅a̲̲̅̅t̲̲̅̅i̲̲̅̅o̲̲̅̅n̲̅]</div>
              </div>
            </Col>
          </Row>
        </Header>
      </Layout>
    </div>
  )
}
export default HomeTop

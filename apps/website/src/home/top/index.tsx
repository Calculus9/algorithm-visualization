/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-08 17:14:57
 * @FilePath: \algorithm-visualization\apps\website\src\home\top\index.tsx
 * @Description:
 *
 */
import { Typography, Button, Layout, Grid } from '@arco-design/web-react'
import Paragraph from '@arco-design/web-react/es/Typography/paragraph'
import Title from '@arco-design/web-react/es/Typography/title'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { usePageStore, useThemeStore } from '../../store/create'

const { Header } = Layout
const Row = Grid.Row
const Col = Grid.Col
const HomeTop = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const menuButton = t('menuButton', { returnObjects: true })
  const themeColor: string = useThemeStore(state => state.themeColor)
  const setPage = usePageStore(state => state.setPage)

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
                <Title style={{ fontSize: 50, wordBreak: 'break-all', fontWeight: 'bolder' }}>
                  {t('title')}
                </Title>
                <Paragraph type='secondary' style={{ fontSize: 22 }}>
                  {t('subTitle')}
                </Paragraph>
              </Typography>
              <div style={{ paddingBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
                {menuButton?.map(item => {
                  return (
                    <Button
                      shape='round'
                      type='outline'
                      size='large'
                      onClick={() => {
                        setPage(item?.index)
                        navigate(item?.value)
                      }}
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
                  color: themeColor
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

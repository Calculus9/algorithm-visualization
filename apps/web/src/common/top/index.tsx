/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: 1441211576@qq.com huangjingyu@kuaishou.com
 * @LastEditTime: 2025-02-13 16:04:12
 * @FilePath: \algorithm-visualization\apps\website\src\common\top\index.tsx
 * @Description:
 *
 */
import { Typography, Button, Layout, Grid } from '@arco-design/web-react'
import Paragraph from '@arco-design/web-react/es/Typography/paragraph'
import Title from '@arco-design/web-react/es/Typography/title'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageStore, useThemeStore } from '../../store/create'
import { ZHTitlte, ENTitlte } from './constants.tsx'
const { Header } = Layout
const Row = Grid.Row
const Col = Grid.Col
import AlVisChart from '../../chart.tsx'
import { homeCode } from '../../constant.ts'
import { useI18n, useLang } from 'rspress/runtime'

const HomeTop = () => {
  // nav
  const navigate = useNavigate()
  // i18n
  const lang = useLang()
  const t = useI18n()

  const menuButton = t('menuButton')

  // theme
  const themeColor: string = useThemeStore(state => state.themeColor)
  const titleColor: string = useThemeStore(state => state.titleBachgroundColor)

  const setPage = usePageStore(state => state.setPage)

  return (
    <div style={{}}>
      <Layout>
        <Header
          style={{
            padding: '0 20px'
          }}
        >
          <Row style={{ display: 'flex', alignItems: 'center' }}>
            <Col span={6}></Col>
            <Col span={8}>
              <Typography>
                <div
                  style={{
                    fontSize: 48,
                    color: themeColor,
                    textAlign: 'center'
                  }}
                >
                  <div>Algorithm-Visualization</div>
                </div>
                <Title
                  style={{
                    fontSize: 30,
                    fontWeight: 'bolder',
                    textAlign: 'center',
                    marginTop: 10
                  }}
                >
                  {lang === 'zh' ? <ZHTitlte /> : <ENTitlte />}
                </Title>
                <Paragraph type='secondary' style={{ fontSize: 25, textAlign: 'center' }}>
                  {t('subTitle')}
                </Paragraph>
              </Typography>
              <div style={{ paddingBottom: 10, display: 'flex', justifyContent: 'space-evenly' }}>
                {(menuButton as [])?.map((item: { index: string; value: string; key: string }) => {
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
            <Col span={8}>
              <div
                style={{ height: '650px', cursor: 'pointer' }}
                // onClick={() => navigate('/playground')}
              >
                <AlVisChart code={homeCode} id='home-chart' />
              </div>
            </Col>
          </Row>
        </Header>
      </Layout>
    </div>
  )
}
export default HomeTop

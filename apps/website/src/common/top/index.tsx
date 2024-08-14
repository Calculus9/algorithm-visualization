/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-08-10 10:18:36
 * @FilePath: \algorithm-visualization\apps\website\src\common\top\index.tsx
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
import './index.css'
import { ZHTitlte, ENTitlte } from './constants.tsx'
import AlVisChart from '../../chart.tsx'
import { DEFAULTCODE } from '../../constant.ts'
const { Header } = Layout
const Row = Grid.Row
const Col = Grid.Col
const HomeTop = () => {
  // nav
  const navigate = useNavigate()
  // i18n
  const { t, i18n } = useTranslation()

  const menuButton = t('menuButton', { returnObjects: true })
  // theme
  const themeColor: string = useThemeStore(state => state.themeColor)
  const titleColor: string = useThemeStore(state => state.titleBachgroundColor)

  const setPage = usePageStore(state => state.setPage)

  return (
    <div style={{ backgroundColor: titleColor }}>
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
                  {i18n.language === 'zh' ? <ZHTitlte /> : <ENTitlte />}
                </Title>
                <Paragraph type='secondary' style={{ fontSize: 22 }}>
                  {t('subTitle')}
                </Paragraph>
              </Typography>
              <div style={{ paddingBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
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
          </Row>
        </Header>
      </Layout>
    </div>
  )
}
export default HomeTop

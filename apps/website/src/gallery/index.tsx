import React, { useCallback, useState } from 'react'
import { Layout } from '@arco-design/web-react'
import { GallerySlider } from './slider'
import { GalleryContent } from './content/content'

const Content = Layout.Content
const Sider = Layout.Sider
const Gallery = () => {
  const [position, setPosition] = useState<string>('')
  const onClick = useCallback((key: string) => {
    setPosition(key)
  }, [])
  return (
    <>
      <div>
        <Layout>
          <Layout>
            <Sider
            // collapsed={this.state.collapsed}
            // onCollapse={this.handleCollapsed}
            // collapsible
            // trigger={this.state.collapsed ? <IconCaretRight /> : <IconCaretLeft />}
            // breakpoint='xl'
            >
              <GallerySlider onClick={onClick} />
            </Sider>
            <Content style={{ margin: 10 }}>
              <GalleryContent position={position} />
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  )
}

export default Gallery

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-01 18:15:06
 * @FilePath: \algorithm-visualization\packages\editor\index.tsx
 * @Description:
 *
 */
import React, { useCallback, useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { Space, Button } from '@arco-design/web-react'
import { IconPlayArrow } from '@arco-design/web-react/icon'

const MonacoEditor: React.FC = ({ onChange }) => {
  const [code, setCode] = useState(localStorage.getItem('storage') || '')
  const editorRef = useRef(null)

  const handleButtonClick = useCallback(() => {
    const currentCode = editorRef?.current?.getValue()
    onChange(currentCode)
  }, [code])

  return (
    <div style={{ height: '500px' }}>
      <Space>
        <Button
          type='outline'
          icon={<IconPlayArrow />}
          shape='circle'
          onClick={handleButtonClick}
        />
      </Space>
      <Editor
        onMount={editor => {
          editorRef.current = editor
        }}
        height='500px'
        language='javascript'
        theme='vs-light'
        value={code}
        // onChange={handleEditorChange}
      />
    </div>
  )
}

export default MonacoEditor

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-07-01 17:18:44
 * @FilePath: \algorithm-visualization\packages\editor\index.tsx
 * @Description:
 *
 */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { Space, Button } from '@arco-design/web-react'
import { IconPlayArrow } from '@arco-design/web-react/icon'
import * as monaco from 'monaco-editor'

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
        onMount={(editor, monaco) => {
          editorRef.current = editor // 将编辑器实例赋给 ref.current
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

/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-20 20:56:39
 * @FilePath: \algorithm-visualization\packages\editor\src\index.tsx
 * @Description:
 *
 */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Editor, useMonaco } from '@monaco-editor/react'
import { Space, Button } from '@arco-design/web-react'
import { IconPlayArrow } from '@arco-design/web-react/icon'
import * as monaco from 'monaco-editor'

const MonacoEditor: React.FC<{ onChange: (code: string) => void }> = ({ onChange }) => {
  const [code] = useState(localStorage.getItem('storage') || '')
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const [editorInstance, setEditorInstance] = useState<monaco.editor.IStandaloneCodeEditor | null>(
    null
  )
  const monaco = useMonaco()

  const onMount = useCallback((editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor
    setEditorInstance(editor)
  }, [])

  useEffect(() => {
    if (editorInstance) {
      const dispose = monaco?.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems: function (model, position) {
          const word = model.getWordUntilPosition(position)
          const range = {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn
          }
          const suggestions = [
            {
              label: 'VisArray',
              kind: monaco.languages.CompletionItemKind.Class,
              insertText: 'VisArray()',
              range: range
            },
            {
              label: 'Alvis',
              kind: monaco.languages.CompletionItemKind.Class,
              insertText: `Alvis("", { data: [], options: {}})`,
              range: range
            }
          ]
          const str = model.getValue()
          const arrayMethods = ['push', 'pop', 'insert', 'get', 'set', 'delete']
          if (str.includes('VisArray' || 'Alvis')) {
            arrayMethods?.map(d => {
              suggestions.push({
                label: d,
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: `${d}()`,
                range: range
              })
            })
            suggestions.push({
              label: `length`,
              kind: monaco.languages.CompletionItemKind.Property,
              insertText: `length`,
              range: range
            })
          }

          return { suggestions: suggestions }
        }
      })
      return () => dispose?.dispose()
    }
  }, [editorInstance])

  const handleButtonClick = useCallback(() => {
    const currentCode = editorRef?.current?.getValue() || ''
    onChange(currentCode)
  }, [code])

  return (
    <div id={'container'} style={{ height: '500px' }}>
      <Space>
        <Button
          type='outline'
          icon={<IconPlayArrow />}
          shape='circle'
          onClick={handleButtonClick}
        />
      </Space>
      <Editor
        onMount={onMount}
        height='500px'
        language='javascript'
        theme='vs-light'
        value={code}
        // options={}
        // onChange={handleEditorChange}
      />
    </div>
  )
}

export default MonacoEditor

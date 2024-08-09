/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 12:27:33
 * @FilePath: \algorithm-visualization\packages\editor\src\index.tsx
 * @Description:
 *
 */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Editor, useMonaco } from '@monaco-editor/react'
import { Space, Button, Tooltip } from '@arco-design/web-react'
import { IconPlayArrow } from '@arco-design/web-react/icon'
import * as monaco from 'monaco-editor'
import { DEFAULTCODE } from '../../../apps/website/src/constant'
import { useThemeStore } from '../../../apps/website/src/store/create'

const MonacoEditor: React.FC<{ onChange: (code: string) => void }> = ({ onChange }) => {
  const [code] = useState(DEFAULTCODE)
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const [editorInstance, setEditorInstance] = useState<monaco.editor.IStandaloneCodeEditor | null>(
    null
  )
  const monaco = useMonaco()
  const contentBgcColor = useThemeStore(state => state.contentBackgroundColor)

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
              label: 'AlvisArray',
              kind: monaco.languages.CompletionItemKind.Class,
              insertText: 'AlvisArray([])',
              range: range
            },
            {
              label: 'AlvisStack',
              kind: monaco.languages.CompletionItemKind.Class,
              insertText: 'AlvisStack([])',
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
          if (str.includes('AlvisArray' || 'Alvis' || 'AlvisStack')) {
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
    <div id={'container'} style={{ height: '550px' }}>
      <div
        style={{
          padding: 10,
          marginBottom: 8,
          backgroundColor: contentBgcColor
        }}
      >
        <Tooltip content='Run' color='#165DFF'>
          <Space>
            <Button
              type='outline'
              icon={<IconPlayArrow />}
              shape='circle'
              onClick={handleButtonClick}
            ></Button>
          </Space>
        </Tooltip>
      </div>
      <Editor
        onMount={onMount}
        height='500px'
        language='javascript'
        theme='vs-light'
        value={code}
      />
    </div>
  )
}

export default MonacoEditor

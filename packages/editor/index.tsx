/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-06-25 14:56:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-06-25 19:18:27
 * @FilePath: \algorithm-visualization\packages\editor\index.tsx
 * @Description: 
 * 
 */
import React, { useCallback, useState } from "react"
import { Editor, OnChange } from '@monaco-editor/react';
import { Space, Button } from "@arco-design/web-react";
import { IconPlayArrow } from '@arco-design/web-react/icon'
// interface IProps {
//   text: string
// }
const MonacoEditor: React.FC = () => {
  const [code, setCode] = useState("");

  const handleEditorChange: OnChange = (value, event) => {
    setCode(value ?? '');
  };

  const handleButtonClick = useCallback(() => {
    // 调用vchart
  }, [code])

  return (
    <div style={{ height: '500px' }}>
      <Space>
      <Button type='outline' icon={<IconPlayArrow/>} shape="circle" onClick={handleButtonClick} />
      </Space>
      <Editor
        height="500px"
        language="javascript"
        theme="vs-light"
        value={code}
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default MonacoEditor

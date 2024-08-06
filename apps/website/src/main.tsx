/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 09:03:40
 * @LastEditors: hjy 1441211576@qq.com
 * @LastEditTime: 2024-08-06 22:15:10
 * @FilePath: \algorithm-visualization\apps\website\src\main.tsx
 * @Description: this is the project entry.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Api from './api/index.tsx'
import Gallery from './gallery/index.tsx'
import { Home } from './home/index.tsx'
import App from './App.tsx'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<App children={<Home />} />} />
      <Route path='/api' element={<App children={<Api />} />} />
      <Route path='/gallery' element={<App children={<Gallery />} />} />
    </Routes>
  </BrowserRouter>
)

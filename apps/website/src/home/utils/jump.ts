/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-08 17:11:05
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-08 17:11:05
 * @FilePath: \algorithm-visualization\apps\website\src\home\utils\jump.ts
 * @Description:
 *
 */

import { useNavigate } from 'react-router-dom'

const jumpTo = (url: string): void => {
  const navigate = useNavigate()
  navigate(url)
}
export { jumpTo }

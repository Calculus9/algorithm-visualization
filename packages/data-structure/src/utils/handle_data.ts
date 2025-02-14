/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-05 18:47:35
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 15:41:46
 * @FilePath: \algorithm-visualization\packages\data-structure\src\utils\handle_data.ts
 * @Description:
 *
 */
export const isNumberArray = (arr: any): arr is number[] => {
  return Array.isArray(arr) && arr.every(item => typeof item === 'number')
}

export const checkValue = (checkParams: number | string | object, len: number): object => {
  let value: object
  if (typeof checkParams !== 'object') {
    value = { id: `${len}`, key: `${checkParams}-${len}`, value: checkParams }
  } else {
    value = {
      id: `${len}`,
      ...checkParams
    }
  }
  return value
}

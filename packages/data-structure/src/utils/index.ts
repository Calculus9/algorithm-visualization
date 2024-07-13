/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-07-01 19:03:35
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-07-13 13:26:06
 * @FilePath: \algorithm-visualization\packages\data-structure\src\utils\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export const isNumberArray = (arr: any): arr is number[] => {
  return Array.isArray(arr) && arr.every(item => typeof item === 'number')
}

export const checkValue = (checkParams: number | object): object => {
  let value: object
  if (typeof checkParams === 'number') {
    // TODO： key，统一成object
    value = { key: `${checkParams}-${Math.random()}`, value: checkParams }
  } else {
    value = checkParams
  }
  return value
}

// export const typeClassMap = new Map([['array', 'AlvisArray']])
// export const dataStrutures = new Map([['AlvisArray', AlvisArray]])

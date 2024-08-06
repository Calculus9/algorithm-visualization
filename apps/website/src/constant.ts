/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 09:03:40
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-06 19:25:02
 * @FilePath: \algorithm-visualization\apps\website\src\constant.ts
 * @Description: Here is the constant data.
 */

export const MenuList = ['Home', 'API', 'Data Structure', 'Gallery']
export const DEFAULTCODE = `const defaultFunctionTemplate = function () {
    // Your code here
    const arr = new AlVis("array", {
        data: [
            { month: 'Monday', sales: 22 },
            { month: 'Tuesday', sales: 13 },
            { month: 'Wednesday', sales: 25 },
            { month: 'Thursday', sales: 29 },
            { month: 'Friday', sales: 38 }
        ],
        options: {
            type: "bar",
            layout: {
                direction: "horizontal"
            },
            fields: {
                category: "month",
                value: "sales"
            },
        }
    })
    return arr
}

return defaultFunctionTemplate`
export enum ChartLibType {
  visactor,
  d3
}

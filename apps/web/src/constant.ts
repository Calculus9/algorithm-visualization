/*
 * @Author: hjy 1441211576@qq.com
 * @Date: 2024-05-14 09:03:40
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-08 15:17:41
 * @FilePath: \algorithm-visualization\apps\website\src\constant.ts
 * @Description: Here is the constant data.
 */

export const DEFAULTCODE = `
const defaultFunctionTemplate = function () {
    // Your code here
    const arr = new AlVis("stack", {
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
    arr.push({ month: 'Thursday1', sales: 290})
    arr.pop()
    arr.push({ month: 'Thursday2', sales: 90})
    return arr
}

return defaultFunctionTemplate
`

export const homeCode = `const defaultFunctionTemplate = function () {
    // Your code here
    const arr = new AlVis("array", {
        data: [
            { month: 'Monday', sales: 22 },
            { month: 'Tuesday', sales: 13 },
            { month: 'Wednesday', sales: 25 },
            { month: 'Thursday', sales: 29 },
        ],
        options: {
            type: "pie",
            layout: {
                direction: "horizontal"
            },
            visual:{
                color: ['#94BFFF', '#6AA1FF', '#4080FF', '#165DFF','#0E42D2','#E8F3FF','#BEDAFF', ],
            },
            fields: {
                category: "month",
                value: "sales"
            },
        }
    })
    arr.push({ month: 'Monday1', sales: 55 })
    arr.push({ month: 'Tuesday1', sales: 12 })
    arr.pop()
    arr.set({ month: 'Tuesday', sales: 20 })
    arr.insert({ month: 'Tuesday2', sales: 200 }, 3)
    arr.delete({ month: 'Tuesday' })
    arr.delete({ sales: 200 })
    return arr
}

return defaultFunctionTemplate`
export enum ChartLibType {
  visactor,
  d3
}

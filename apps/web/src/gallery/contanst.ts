/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-08-09 11:03:31
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-08-09 15:23:56
 * @FilePath: \algorithm-visualization\apps\website\src\gallery\contanst.ts
 * @Description:
 *
 */

const bruteForce = [
  `const defaultFunctionTemplate = function () {
      const arr = new AlVisArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
      const n = arr.length
      for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - 1 - i; j++) {
              if (arr[j] > arr[j + 1]) {
                  // 交换元素
                  let temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
      return arr
  }
  
  return defaultFunctionTemplate`
]
const dp = []

const divideConquer = [
  `const defaultFunctionTemplate = function () {
    // Your code here
    const array = new AlVisArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    for (let i = 1; i < array.length; i++) {
        const key = array.get(i);
        let j = i - 1;

        while (j >= 0 && array.get(j) > key) {
            [array[j+1], array[j]] = [array[j], array[j + 1]]
            j = j - 1;
        }
    }
    return array
}

return defaultFunctionTemplate`,
  `const defaultFunctionTemplate = function () {
    const nums = new AlVisArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    qSort(nums, 0, nums.length - 1)
    return nums;
}

const qSort = (q, l, r) => {
    if (l >= r) return;

    let i = l - 1, j = r + 1, x = q[l];
    while (i < j) {
        do i++; while (q[i] < x);
        do j--; while (q[j] > x);
        if (i < j) [q[i], q[j]] = [q[j], q[i]]
    }
    qSort(q, l, j);
    qSort(q, j + 1, r);
}


return defaultFunctionTemplate`
]
export const defaultAlgorithms = [bruteForce, dp, divideConquer]

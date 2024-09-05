const bruteForce = [
  `const defaultFunctionTemplate = function () {
  const nums = new AlVisArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  return nums;
}
return defaultFunctionTemplate`
]
const dp = [
  `const defaultFunctionTemplate = function () {
    // Your code here
    const array = new AlVisArray([1, 2, 3])
    return array
}
return defaultFunctionTemplate`,
  `const defaultFunctionTemplate = function () {
    // Your code here
    const array = new AlVisArray([1, 2])
    return array
}
return defaultFunctionTemplate`
]

const divideConquer = [
  `const defaultFunctionTemplate = function () {
    const nums = new AlVisArray([10, 9, 8, 7, 6, 3, 2, 1])
    return nums;
}
return defaultFunctionTemplate`,
  `const defaultFunctionTemplate = function () {
    const nums = new AlVisArray([10, 7, 6, 5, 4, 3, 2, 1])
    return nums;
}
return defaultFunctionTemplate`
]
export const initCode = [bruteForce, dp, divideConquer]

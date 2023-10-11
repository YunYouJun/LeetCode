/* eslint-disable no-console */
/**
 * 测试
 * @param callback 函数
 * @param testcases 测试用例
 * @param expectedResults 预期结果
 */
export function testFunction(
  callback: Function,
  testcases: any[],
  expectedResults?: any[],
) {
  console.log('Problem:', callback.name)

  testcases.forEach((testcase, i) => {
    const result = callback(...testcase)
    console.log()
    let title = `测试 ${i + 1}`
    if (expectedResults) {
      title += ': '
      if (isEqual(result, expectedResults[i]))
        title += '✅'
      else title += '❌'
    }

    console.log(title)
    console.log('输入:', ...testcase)
    console.log('输出:', result)

    if (expectedResults)
      console.log('预期结果:', expectedResults[i])
    else console.log()
  })
}

/**
 * 深层比较
 * @param a
 * @param b
 */
function isEqual(a: any, b: any) {
  // 除了引用类型都可以判断
  if (!(a instanceof Object) || !(b instanceof Object))
    return Object.is(a, b)

  if (Object.keys(a).length !== Object.keys(b).length)
    return false

  const keysA = Object.keys(a)
  let result = true
  for (const key of keysA) {
    result &&= isEqual(a[key], b[key])
    if (!result)
      return false
  }
  return true
}

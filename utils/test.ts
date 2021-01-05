/**
 * 测试
 * @param testcases 测试用例
 * @param callback
 */
export function testFunction(testcases: any[], callback: Function) {
  testcases.forEach((testcase) => {
    const result = callback(testcase);
    console.log(testcase, result);
  });
}

/**
 * 测试
 * @param callback 函数
 * @param testcases 测试用例
 * @param expectedReults 预期结果
 */
export function testFunction(
  callback: Function,
  testcases: any[],
  expectedReults?: any[]
) {
  console.log("Problem:", callback.name);
  console.log();

  testcases.forEach((testcase, i) => {
    let result;
    if (Array.isArray(testcase)) {
      result = callback(...testcase);
    } else {
      result = callback(testcase);
    }
    console.log(`测试 ${i + 1}`);
    console.log(`输入:`, testcase);
    console.log("输出:", result);
    console.log();

    if (expectedReults) {
      console.log("预期结果：", expectedReults[i]);
    }
  });
}

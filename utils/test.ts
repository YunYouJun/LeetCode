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

  testcases.forEach((testcase, i) => {
    let result;
    result = callback(testcase);
    console.log();
    let title = `测试 ${i + 1}`;
    if (expectedReults) {
      title += ": ";
      if (result === expectedReults[i]) {
        title += "✅";
      } else {
        title += "❌";
      }
    }

    console.log(title);
    console.log(`输入:`, testcase);
    console.log("输出:", result);

    if (expectedReults) {
      console.log("预期结果:", expectedReults[i]);
    } else {
      console.log();
    }
  });
}

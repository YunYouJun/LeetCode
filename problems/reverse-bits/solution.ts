/**
 * 字符串方式
 * @param n
 * @returns
 */
function reverseBits(n: number): number {
  let binary = n.toString(2);
  const length = binary.length;
  for (let i = 0; i < 32 - length; i++) {
    binary = "0" + binary;
  }
  return parseInt(binary.split("").reverse().join(""), 2);
}

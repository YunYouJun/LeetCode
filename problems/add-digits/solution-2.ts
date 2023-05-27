/**
 * https://zh.wikipedia.org/zh-sg/%E6%95%B8%E6%A0%B9
 */
export function addDigits(num: number) {
  return (num - 1) % 9 + 1
}

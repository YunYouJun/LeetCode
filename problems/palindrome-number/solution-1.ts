/**
 * 回文数
 * @param x
 */
export function isPalindrome(x: number): boolean {
  const s = x.toString()
  return s.split('').reverse().join('') === s
}

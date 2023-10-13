/**
 * 字符串方式
 * @param n
 */
export function reverseBits(n: number): number {
  let binary = n.toString(2)
  const length = binary.length
  for (let i = 0; i < 32 - length; i++)
    binary = `0${binary}`

  return Number.parseInt(binary.split('').reverse().join(''), 2)
}

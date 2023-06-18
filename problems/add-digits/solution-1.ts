export function addDigits(num: number): number {
  while (num >= 10)
    num = num.toString().split('').reduce((a, b) => a + Number.parseInt(b), 0)

  return num
}

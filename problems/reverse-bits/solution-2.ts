import { testFunction } from '@/utils'

function reverseBits(n: number): number {
  let rev = 0
  for (let i = 0; i < 32 && n > 0; i++) {
    // (n & 1) << (31 - i) 优先
    rev |= (n & 1) << (31 - i)
    n >>>= 1
  }
  return rev >>> 0
}
const testcases = [
  0b00000010100101000001111010011100, 0b11111111111111111111111111111101,
]
const expectedResults = [
  0b00111001011110000010100101000000, 0b10111111111111111111111111111111,
]
testFunction(reverseBits, testcases, expectedResults)

import { reverseBits } from './solution-3'

import { testFunction } from '@/utils/src'

const testcases = [
  0b00000010100101000001111010011100, 0b11111111111111111111111111111101,
]
const expectedResults = [
  0b00111001011110000010100101000000, 0b10111111111111111111111111111111,
]
testFunction(reverseBits, testcases, expectedResults)

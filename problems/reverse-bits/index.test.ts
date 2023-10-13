import { describe, expect, it } from 'vitest'
import { reverseBits } from './solution'
import pkg from './package.json'

describe(pkg.title, () => {
  it('should work', () => {
    expect(reverseBits(0b00000010100101000001111010011100)).toBe(0b00111001011110000010100101000000)
    expect(reverseBits(0b00111001011110000010100101000000)).toBe(0b00000010100101000001111010011100)
  })
})

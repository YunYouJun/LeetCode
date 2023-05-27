import { describe, expect, it } from 'vitest'
import { addDigits } from './solution'

describe('', () => {
  it('should work', () => {
    expect(addDigits(38)).toBe(2)
    expect(addDigits(11)).toBe(2)
    expect(addDigits(0)).toBe(0)
  })
})

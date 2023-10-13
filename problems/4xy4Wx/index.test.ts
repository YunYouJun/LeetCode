import { describe, expect, it } from 'vitest'
import { purchasePlans } from './solution'

describe('purchasePlans', () => {
  it('should work', () => {
    expect(purchasePlans([2, 5, 3, 5], 6)).toBe(1)
    expect(purchasePlans([2, 2, 1, 9], 10)).toBe(4)
    expect(purchasePlans([40330, 31957, 63879, 13204, 47923, 56282, 75126, 3423, 98483], 60482)).toBe(7)
  })
})

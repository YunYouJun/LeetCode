import { describe, expect, it } from 'vitest'
import pkg from './package.json'
import { findKthLargest } from './solution-1'

describe(pkg.title, () => {
  it('should work', () => {
    expect(
      findKthLargest([3, 2, 1, 5, 6, 4], 2),
    ).toBe(5)

    expect(
      findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4),
    ).toBe(4)
  })
})

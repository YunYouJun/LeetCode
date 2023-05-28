import { describe, expect, it } from 'vitest'
import { maxArea } from './solution-deprecated'

describe('maxArea', () => {
  it('should work', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
    expect(maxArea([1, 1])).toBe(1)
  })
})

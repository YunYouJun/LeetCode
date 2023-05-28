import { describe, expect, it } from 'vitest'
import { threeSumClosest } from './solution'

describe('threeSumCloset', () => {
  it('should work', () => {
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2)
    expect(threeSumClosest([0, 0, 0], 1)).toBe(0)
  })
})

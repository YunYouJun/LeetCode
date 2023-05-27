import { describe, expect, it } from 'vitest'
import { twoSum } from './solution-2'

describe('two sum', () => {
  it('should work', () => {
    expect(twoSum([2, 7, 11, 15], 9).sort()).toEqual([0, 1].sort())
    expect(twoSum([3, 2, 4], 6).sort()).toEqual([1, 2].sort())
    expect(twoSum([3, 3], 6).sort()).toEqual([0, 1].sort())
  })
})

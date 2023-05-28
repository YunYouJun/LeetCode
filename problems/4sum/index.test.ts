import { describe, expect, it } from 'vitest'
import { fourSum } from './solution'

describe('', () => {
  it('should work', () => {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]])
  })

  it('same numbers', () => {
    expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]])
    expect(fourSum([2, 2, 2, 2, 2], 0)).toEqual([])
  })
})

import { describe, expect, it } from 'vitest'
import { permute } from './solution'

describe('permutations', () => {
  it('should work', () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2],
    ])
  })
})

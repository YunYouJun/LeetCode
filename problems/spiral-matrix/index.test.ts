import { describe, expect, it } from 'vitest'
import pkg from './package.json'
import { spiralOrder as spiralOrder1 } from './solution-1'

function testFunction(fn: typeof spiralOrder1) {
  describe(pkg.title, () => {
    it('should work', () => {
      expect(fn(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      )).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])

      expect(fn(
        [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
        ],
      )).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
    })
  })
}

testFunction(spiralOrder1)

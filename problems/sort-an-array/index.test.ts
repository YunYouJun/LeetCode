import { describe, expect, it } from 'vitest'
import pkg from './package.json'
import { sortArray as sortArray1 } from './solution-1'
import { sortArray as sortArray2 } from './solution-2'

function testFunction(fn: typeof sortArray1) {
  describe(pkg.title, () => {
    it('should work', () => {
      expect(fn(
        [5, 2, 3, 1],
      )).toStrictEqual(
        [1, 2, 3, 5],
      )

      expect(fn(
        [5, 1, 1, 2, 0, 0],
      )).toStrictEqual(
        [0, 0, 1, 1, 2, 5],
      )

      expect(fn(
        [5, 1, 1, 2, 0, 0, 3, 4, 5, 6, 7, 8, 9, 10],
      )).toStrictEqual(
        [0, 0, 1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10],
      )
    })
  })
}

testFunction(sortArray1)
testFunction(sortArray2)

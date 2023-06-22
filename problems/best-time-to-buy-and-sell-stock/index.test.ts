import { describe, expect, it } from 'vitest'
import pkg from './package.json'
import { maxProfit as maxProfit1 } from './solution-1'
import { maxProfit as maxProfit2 } from './solution-2'

function testFunction(fn: typeof maxProfit1) {
  describe(pkg.title, () => {
    it('should work', () => {
      expect(fn(
        [7, 1, 5, 3, 6, 4],
      )).toBe(5)

      expect(fn(
        [7, 6, 4, 3, 1],
      )).toBe(0)
    })
  })
}

testFunction(maxProfit1)
testFunction(maxProfit2)

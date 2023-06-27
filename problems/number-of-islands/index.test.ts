import { describe, expect, it } from 'vitest'
import { numIslands as numIslands1 } from './solution-1'
import { numIslands as numIslands2 } from './solution-2'
import { numIslands as numIslands3 } from './solution-3'

function testFunction(fn: typeof numIslands1) {
  describe('', () => {
    it('should work', () => {
      expect(
        fn([
          ['1', '1', '1', '1', '0'],
          ['1', '1', '0', '1', '0'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '0', '0', '0'],
        ]),
      ).toBe(1)

      expect(
        fn([
          ['1', '1', '0', '0', '0'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '1', '0', '0'],
          ['0', '0', '0', '1', '1'],
        ]),
      ).toBe(3)
    })
  })
}

testFunction(numIslands1)
testFunction(numIslands2)
testFunction(numIslands3)

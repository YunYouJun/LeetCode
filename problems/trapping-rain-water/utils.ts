import { describe, expect, it } from 'vitest'
import pkg from './package.json'
import { } from './solution-1'

export function testFunction(func: (height: number[]) => number) {
  const trap = func

  describe(pkg.title, () => {
    it('should work', () => {
      expect(trap([
        0,
        1,
        0,
        2,
        1,
        0,
        1,
        3,
        2,
        1,
        2,
        1,
      ])).toBe(6)

      expect(trap([
        4,
        2,
        0,
        3,
        2,
        5,
      ])).toBe(9)

      expect(trap([
        2,
        0,
        2,
      ])).toBe(2)
    })
  })
}

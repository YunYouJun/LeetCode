import { describe, expect, it } from 'vitest'
import { maxAreaOfIsland } from './solution'
import pkg from './package.json'

describe(pkg.title, () => {
  it('should work', () => {
    expect(
      maxAreaOfIsland(
        [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]],
      ),
    ).toBe(6)

    expect(
      maxAreaOfIsland(
        [[0, 0, 0, 0, 0, 0, 0, 0]],
      ),
    ).toBe(0)
  })
})

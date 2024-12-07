import { describe, expect, it } from 'vitest'
import pkg from './package.json'
import { maxAreaOfIsland } from './solution'

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

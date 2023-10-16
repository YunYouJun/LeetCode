import { describe, expect, it } from 'vitest'
import { sum } from '.'

describe('', () => {
  it('should work', () => {
    expect(sum(1, 2)).toBe(3)

    expect(sum(1, 3)).toBe(4)
  })
})

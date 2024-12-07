import { describe, expect, it } from 'vitest'
import pkg from './package.json'
import { } from './solution'

describe(pkg.title, () => {
  it('should work', () => {
    expect(1).toBe(1)
  })
})

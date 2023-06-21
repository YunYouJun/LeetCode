import { describe, expect, it } from 'vitest'
import { } from './solution'
import pkg from './package.json'

describe(pkg.title, () => {
  it('should work', () => {
    expect(1).toBe(1)
  })
})

import { describe, expect, it } from 'vitest'
import { createCounter } from './solution'

describe('counter', () => {
  it('should work', () => {
    const counter = createCounter(10)

    expect(counter()).toBe(10)
    expect(counter()).toBe(11)
    expect(counter()).toBe(12)
  })
})

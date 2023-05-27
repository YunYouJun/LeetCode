import { describe, expect, it } from 'vitest'
import { areDeeplyEqual } from './solution'

describe('', () => {
  it('should work', () => {
    const o1 = { x: 1, y: 2 }
    const o2 = { x: 1, y: 2 }

    expect(areDeeplyEqual(o1, o2)).toBe(true)
  })

  it('key order', () => {
    const o1 = { y: 2, x: 1 }
    const o2 = { x: 1, y: 2 }

    expect(areDeeplyEqual(o1, o2)).toBe(true)
  })

  it('数字数组不同于字符串数组', () => {
    const o1 = { x: null, L: [1, 2, 3] }
    const o2 = { x: null, L: ['1', '2', '3'] }

    expect(areDeeplyEqual(o1, o2)).toBe(false)
  })

  it('true !== false', () => {
    const o1 = true
    const o2 = false

    expect(areDeeplyEqual(o1, o2)).toBe(false)
  })
})

import { describe, expect, it } from 'vitest'
import { lengthOfLongestSubstring } from './solution'

describe('', () => {
  it('should work', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })

  it('same numbers', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })
})

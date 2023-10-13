import { describe, expect, it } from 'vitest'
import { longestCommonSubsequence } from './solution'

describe('longestCommonSubsequence', () => {
  it('should work', () => {
    expect(
      longestCommonSubsequence('abcde', 'ace'),
    ).toBe(3)

    expect(
      longestCommonSubsequence('abc', 'abc'),
    ).toBe(3)

    expect(
      longestCommonSubsequence('abc', 'def'),
    ).toBe(0)
  })
})

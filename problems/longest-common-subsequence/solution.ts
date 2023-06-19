import { testFunction } from '@/utils/src'

function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length
  const n = text2.length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + 1
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }

  return dp[m][n]
}
const testcases = [
  ['abcde', 'ace'],
  ['abc', 'abc'],
  ['abc', 'def'],
]
const expectedResults = [3, 3, 0]
testFunction(longestCommonSubsequence, testcases, expectedResults)

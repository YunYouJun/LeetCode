import { testFunction } from '@/utils'

function change(amount: number, coins: number[]): number {
  const dp = []
  dp.length = amount + 1
  dp.fill(0)
  dp[0] = 1

  for (const coin of coins) {
    for (let i = coin; i < amount + 1; i++) dp[i] += dp[i - coin]
  }

  return dp[amount]
}
const testcases = [
  [5, [1, 2, 5]],
  [3, [2]],
  [10, [10]],
]
const expectedResults = [4, 0, 1]
testFunction(change, testcases, expectedResults)

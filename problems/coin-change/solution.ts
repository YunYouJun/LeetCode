import { testFunction } from '@/utils'

function coinChange(coins: number[], amount: number): number {
  const dp = []
  dp.length = amount + 1
  dp.fill(Infinity, 0)
  dp[0] = 0
  for (const coin of coins) {
    for (let i = coin; i < amount + 1; i++)
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
const testcases = [
  [[1, 2, 5], 11],
  [[2], 3],
  [[1], 0],
  [[1], 1],
  [[1], 2],
]
const expectedReults = [3, -1, 0, 1, 2]
testFunction(coinChange, testcases, expectedReults)

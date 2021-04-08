from typing import List


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0

        for coin in coins:
            for x in range(coin, amount + 1):
                dp[x] = min(dp[x], dp[x - coin] + 1)
        return dp[amount] if dp[amount] != float('inf') else -1


if __name__ == '__main__':
    test_cases = [[5, [1, 2, 5]], [3, [2]], [10, [10]]]
    for case in test_cases:
        ans = Solution().coinChange(*case)
        print(ans)

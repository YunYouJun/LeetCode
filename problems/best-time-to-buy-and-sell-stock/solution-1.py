# 超时
class Solution:
    def maxProfit(self, prices: [int]) -> int:
        maxProfit = 0
        for i in range(len(prices)):
            for j in range(i + 1, len(prices)):
                maxProfit = max(maxProfit, prices[j] - prices[i])
        return maxProfit
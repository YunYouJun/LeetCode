from typing import List
class Solution:
    def findTargetSumWays(self, nums: List[int], S: int) -> int:
        if sum(nums) < S or (sum(nums) + S) % 2 == 1: return 0
        P = (sum(nums) + S) // 2
        dp = [1] + [0 for _ in range(P)]
        for num in nums:
            for j in range(P, num - 1, -1):
                dp[j] += dp[j - num]
        return dp[P]
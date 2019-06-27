class Solution:
    def rob(self, nums: [int]) -> int:
        n = len(nums)
        if n == 0: return 0
        if n <= 2: return max(nums)
        i = 3
        dp = [nums[0]] + [nums[1]] + [nums[0] + nums[2]] + [0] * (n-3)
        while i < n:
            dp[i] = max(dp[i-2] + nums[i], dp[i-3] + nums[i])
            i += 1
        return max(dp)
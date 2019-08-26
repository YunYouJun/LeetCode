# 超时
import sys
class Solution:
    def minSubArrayLen(self, s: int, nums: [int]) -> int:
        n = len(nums)
        if n == 0: return 0
        ans = sys.maxsize
        sums = [None] * n
        sums[0] = nums[0]
        for i in range(1, n):
            sums[i] = sums[i-1] + nums[i]
        for i in range(n):
            for j in range(i, n):
                sum_n = sums[j] - sums[i] + nums[i]
                if sum_n >= s:
                    ans = min(ans, (j-i+1))
                    break
        return ans if ans != sys.maxsize else 0
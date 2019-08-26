import sys
class Solution:
    def minSubArrayLen(self, s: int, nums: [int]) -> int:
        n = len(nums)
        ans = sys.maxsize
        left = 0
        sum_n = 0
        for i in range(n):
            sum_n += nums[i]
            while sum_n >= s:
                ans = min(ans, i + 1 -left)
                sum_n -= nums[left]
                left += 1
        return ans if ans != sys.maxsize else 0
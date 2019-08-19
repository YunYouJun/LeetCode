# 超时
# 可以大幅度优化
class Solution:
    def pivotIndex(self, nums: [int]) -> int:
        for i in range(len(nums)):
            if sum(nums[:i]) == sum(nums[i+1:]):
                return i
        return -1
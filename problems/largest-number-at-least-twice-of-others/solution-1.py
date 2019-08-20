class Solution:
    def dominantIndex(self, nums: [int]) -> int:
        M = max(nums)
        return nums.index(M) if len([0 for i in nums if 2*i <= M]) == len(nums)-1 else -1
class Solution:
    def dominantIndex(self, nums: [int]) -> int:
        if len(nums) == 1:
            return 0
        sort_nums = sorted(set(nums))
        if sort_nums[-1] >= sort_nums[-2] * 2:
            return nums.index(sort_nums[-1])
        return -1 
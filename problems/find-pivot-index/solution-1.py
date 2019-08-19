class Solution:
    def pivotIndex(self, nums: [int]) -> int:
        sum_nums = sum(nums)
        left = 0
        for i in range(len(nums)):
            if left * 2 == sum_nums - nums[i]:
                return i
            left += nums[i]
        return -1
class Solution:
    def missingNumber(self, nums: [int]) -> int:
        nums.sort()
        for i in range(len(nums)):
            if nums[i] != i:
                return nums[i] - 1
        return len(nums)
class Solution:
    def missingNumber(self, nums: [int]) -> int:
        missing = len(nums)
        for i, num in enumerate(nums):
            missing ^= i ^ num
        return missing
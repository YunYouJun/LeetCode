class Solution:
    def findMaxConsecutiveOnes(self, nums: [int]) -> int:
        j = 0
        temp = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                j += 1
            else:
                temp = max(temp, j)
                j = 0
        return max(temp, j)
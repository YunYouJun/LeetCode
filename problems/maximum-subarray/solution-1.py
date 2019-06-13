class Solution:
    def maxSubArray(self, nums: [int]) -> int:
        tmp = nums[0]
        maxv = tmp
        for i in range(1, len(nums)):
            if tmp + nums[i] > nums[i]:
                maxv = max(maxv, tmp + nums[i])
                tmp = tmp + nums[i]
            else:
                maxv = max(maxv, tmp, nums[i])
                tmp = nums[i]
        return maxv
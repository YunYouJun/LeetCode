class Solution:
    def removeDuplicates(self, nums: [int]) -> int:
        if len(nums) == 0:
            return 0
        order = 0
        for i in range(1, len(nums)):
            if nums[order] != nums[i]:
                order += 1
                nums[order] = nums[i]
        return order + 1